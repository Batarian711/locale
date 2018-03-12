import { basename, dirname, join, relative } from 'path';
import * as ts from 'typescript';
import * as wordWrap from 'word-wrap';

import fsWrite from '@bin/fs/write';

import Generator from '@bin/Generator';
import IData from '@bin/IData';
import IDeclaration from '@bin/IDeclaration';
import IIso3166 from '@bin/IIso3166';
import IIso3166Part1 from '@bin/IIso3166/IPart1';
import IIso3166Part1Alpha2 from '@bin/IIso3166/IPart1/IAlpha2';
import IIso639 from '@bin/IIso639';
import IIso639Part1 from '@bin/IIso639/IPart1';
import ILocale from '@bin/ILocale';
import IScript from '@bin/IScript';
import Output from '@bin/Output';

const exportToken = ts.createToken(ts.SyntaxKind.ExportKeyword);
const defaultToken = ts.createToken(ts.SyntaxKind.DefaultKeyword);
const questionToken = ts.createToken(ts.SyntaxKind.QuestionToken);

// Members are marked internal, and we don't *really* need it but adding it mirrors what the TypeScript parser does
// https://github.com/Microsoft/TypeScript/blob/v2.7.2/src/compiler/types.ts#L566-L569
// tslint:disable-next-line:interface-name
interface JSDocContainer {
  jsDoc?: Array<ts.JSDoc>;  // JSDoc that directly precedes this node
}

function formatJavaScriptDocumentation({ comment, tags }: ts.JSDoc): string {
  if (!comment) { throw new TypeError('The JSDoc object *must* have a `comment` property'); }
  const lines = wordWrap(comment, { width: 110, indent: '' }).split(/\r?\n/g);
  const prefix = '\n * ';
  let formatted = `/**${prefix}${lines.join(prefix)}`;
  if (tags && tags.length) {
    formatted += prefix;
    formatted += tags.map(({ tagName: { escapedText }, comment: value }) => {
      if (!value) { throw new TypeError('The JSDoc tag *must* have a `comment` property'); }
      return `@${escapedText} ${value.split(/\r?\n/g).join(prefix)}`;
    }).join(prefix);
  }
  formatted += '\n */';
  return formatted;
}

type JSDocTags = ReadonlyArray<[string, string]>;

function attachJavaScriptDocumentation<T extends ts.HasJSDoc>(node: T, comment: string, tags: JSDocTags = []): T {
  // tslint:disable-next-line:no-unnecessary-type-assertion
  const jsdoc = ts.createNode(ts.SyntaxKind.JSDocComment, -1, -1) as ts.JSDoc;
  jsdoc.flags |= ts.NodeFlags.Synthesized;  // tslint:disable-line:no-bitwise
  jsdoc.parent = node;
  jsdoc.comment = comment;

  if (tags.length) {
    jsdoc.tags = ts.createNodeArray(tags.map(([name, value]) => {
      // tslint:disable-next-line:no-unnecessary-type-assertion
      const tag = ts.createNode(ts.SyntaxKind.JSDocComment, -1, -1) as ts.JSDocTag;
      tag.flags |= ts.NodeFlags.Synthesized;  // tslint:disable-line:no-bitwise
      tag.parent = jsdoc;
      tag.tagName = ts.createIdentifier(name);
      tag.comment = value;
      return tag;
    }));
  }

  (node as ts.Statement & JSDocContainer).jsDoc = [jsdoc];

  const text = formatJavaScriptDocumentation(jsdoc);

  const doc: ts.SynthesizedComment = {
    hasTrailingNewLine: true,
    kind: ts.SyntaxKind.MultiLineCommentTrivia,
    text: text.substring(2, text.length - 2),
    pos: -1,
    end: -1
  };

  // `emitNode` is marked internal, but we need it to output comments so 🤷‍
  // https://github.com/Microsoft/TypeScript/blob/v2.7.2/src/compiler/types.ts#L561
  // tslint:disable-next-line:no-any
  (node as any).emitNode = { leadingComments: [doc], startsOnNewLine: true };

  return node;
}

function createExportedConstVariable(
  name: string,
  typename: string | ts.TypeNode,
  value: number | string | ts.Expression
): ts.VariableStatement {
  const literal = (typeof value === 'string' || typeof value === 'number') ? ts.createLiteral(value) : value;
  const type = (typeof typename === 'string') ? ts.createTypeReferenceNode(typename, []) : typename;
  const declaration = ts.createVariableDeclaration(name, type, literal);
  const declarationList = ts.createVariableDeclarationList([declaration], ts.NodeFlags.Const);
  const statement = ts.createVariableStatement([exportToken], declarationList);
  return statement;
}

function createDefaultImport(name: string, path?: string): ts.Statement {
  const importClause = ts.createImportClause(ts.createIdentifier(name), undefined);
  const importPath = ts.createLiteral(path || `./${name}`);
  const importDeclaration = ts.createImportDeclaration(undefined, undefined, importClause, importPath);
  return importDeclaration;
}

function createReexportedTypeAlias(output: string, nested: string): Array<ts.Statement> {
  if (basename(output) !== 'index.ts') { throw new TypeError(`Output '${output}' must end with 'index.ts'`); }
  const importDeclaration = createDefaultImport(nested);

  const typename = basename(dirname(output));
  const imported = ts.createTypeReferenceNode(nested, []);
  const type = ts.createTypeAliasDeclaration(undefined, undefined, typename, undefined, imported);

  const exportDeclaration = ts.createExportAssignment(undefined, undefined, false, ts.createIdentifier(typename));

  return [importDeclaration, type, exportDeclaration];
}

async function writeAst(output: string, ast: ReadonlyArray<ts.Statement>): Promise<void> {
  const file = ts.createSourceFile(output, '', ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
  file.statements = ts.createNodeArray(ast);
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const source = printer.printNode(ts.EmitHint.SourceFile, file, file);

  // TODO: not sure how to add newlines between statements in the output; do it manually
  const separatedStatements = source.replace(/^(?! |import|export)(.*[;}])$/gm, '$&\n').trim();

  // TODO: not sure how to write the Union on multiple lines
  const separatedUnion = separatedStatements.replace(/\| [\w]+/g, '\n  $&');

  // TODO: not sure how to change the indent
  const correctedIndent = separatedUnion.replace(/^    /gm, '  ').trim();

  // TODO: newlines between interface types
  const spacedInterfaces = correctedIndent.replace(/;\n  \/\*\*/g, ';\n\n  \/**').trim();

  // TODO: make sure all JSDoc blocks have a newline
  const spacedJsDoc = spacedInterfaces.replace(/[^\n](\n\/\*\*)/g, '\n$1').trim();

  await fsWrite(output, `${spacedJsDoc.trim()}\n`);
}

async function* generateDeclarations({
  output,
  data,
  variableCommentCallback,
  typeAliasCommentCallback,
  unionCommentCallback,
  setCommentCallback
}: {
    output: string;
    data: Array<IDeclaration>;
    variableCommentCallback(declaration: IDeclaration): [string, JSDocTags];
    typeAliasCommentCallback(declaration: IDeclaration): [string, JSDocTags];
    // tslint:disable-next-line:type-literal-delimiter
    unionCommentCallback(options: { typename: string, variable: string }): [string, JSDocTags];
    // tslint:disable-next-line:type-literal-delimiter
    setCommentCallback(options: { typename: string, variable: string }): [string, JSDocTags];
  }): AsyncIterableIterator<string> {
  if (data.length) {
    const ast: Array<ts.Statement> = data.map(({ name, value, variable, typename }) => {
      const literal = ts.createLiteral(value);
      const literalType = ts.createLiteralTypeNode(literal);
      const typeAlias = ts.createTypeAliasDeclaration(undefined, [exportToken], typename, undefined, literalType);
      const [typeAliasComment, typeAliasCommentTags] = typeAliasCommentCallback({ name, value, variable, typename });
      attachJavaScriptDocumentation(typeAlias, typeAliasComment, typeAliasCommentTags);
      const variableStatement = createExportedConstVariable(variable, typename, literal);
      const [variableComment, variableCommentTags] = variableCommentCallback({ name, value, variable, typename });
      attachJavaScriptDocumentation(variableStatement, variableComment, variableCommentTags);
      return [typeAlias, variableStatement];
    }).reduce((a, n) => a.concat(n), []);

    {
      const typename = basename(output, '.ts');
      const variable = `${typename.charAt(0).toLowerCase()}${typename.substring(1)}`;
      const unionType = ts.createUnionTypeNode(data.map(({ typename: t }) => ts.createTypeReferenceNode(t, [])));
      const union = ts.createTypeAliasDeclaration(undefined, undefined, typename, undefined, unionType);
      const [unionComment, unionCommentTags] = unionCommentCallback({ variable, typename });
      attachJavaScriptDocumentation(union, unionComment, unionCommentTags);
      ast.push(union);

      const array = ts.createArrayLiteral(data.map(({ variable: v }) => ts.createIdentifier(v)), true);
      const typenameType = ts.createTypeReferenceNode(typename, []);
      const setNew = ts.createNew(ts.createIdentifier('Set'), [typenameType], [array]);
      const setType = ts.createTypeReferenceNode('ReadonlySet', [typenameType]);
      const setStatement = createExportedConstVariable(variable, setType, setNew);
      const [setComment, setCommentTags] = setCommentCallback({ variable, typename });
      attachJavaScriptDocumentation(setStatement, setComment, setCommentTags);
      ast.push(setStatement);

      const exportDeclaration = ts.createExportAssignment(undefined, undefined, false, ts.createIdentifier(typename));
      ast.push(exportDeclaration);
    }

    await writeAst(output, ast);
    yield output;
  }
}

async function* generateIso639Part1(output: string, data: Array<IIso639Part1>): AsyncIterableIterator<string> {
  const location = join(output, 'locale', 'Iso639', 'Part1.ts');
  const see: [string, string] = ['see', 'https://en.wikipedia.org/wiki/ISO_639-1'];
  const example = `<caption>Validation</caption>
import { part1 } from '${relative(output, location).split('.').slice(0, -1).join('.')}';
if (!part1.has('someRegionCode')) {
  throw new TypeError('Invalid region code');
}`;
  yield* generateDeclarations({
    output: location,
    data,
    variableCommentCallback: ({ name }) => ([`The variable for the ${name} ISO639-1 language code`, [see]]),
    typeAliasCommentCallback: ({ name }) => ([`The type declaration for the ${name} ISO639-1 region code`, [see]]),
    unionCommentCallback: () => (['All possible types for ISO639-1 region codes', [see]]),
    setCommentCallback: () => (['All possible ISO639-1 region code values', [see, ['example', example]]])
  });
}

async function* generateIso639(output: string, data: IIso639): AsyncIterableIterator<string> {
  const location = join(output, 'locale', 'Iso639', 'index.ts');
  const ast = createReexportedTypeAlias(location, 'Part1');
  await writeAst(location, ast);
  yield location;

  yield* generateIso639Part1(output, data.part1);
}

async function* generateIso3166Part1Alpha2(
  output: string,
  data: Array<IIso3166Part1Alpha2>
): AsyncIterableIterator<string> {
  const location = join(output, 'locale', 'Iso3166', 'Part1', 'Alpha2.ts');
  const see: [string, string] = ['see', 'https://en.wikipedia.org/wiki/ISO_3166-1'];
  const example = `<caption>Validation</caption>
import { alpha2 } from '${relative(output, location).split('.').slice(0, -1).join('.')}';
if (!alpha2.has('someLanguageCode')) {
  throw new TypeError('Invalid language code');
}`;
  yield* generateDeclarations({
    output: location,
    data,
    variableCommentCallback: ({ name }) => ([`The variable for the ${name} ISO3166-1 alpha2 language code`, [see]]),
    typeAliasCommentCallback: ({ name }) =>
      ([`The type declaration for the ${name} ISO3166-1 alpha2 language code`, [see]]),
    unionCommentCallback: () => (['All possible types for ISO3166-1 alpha2 language codes', [see]]),
    setCommentCallback: () => (['All possible ISO3166-1 alpha2 language code values', [see, ['example', example]]])
  });
}

async function* generateIso3166Part1(output: string, data: IIso3166Part1): AsyncIterableIterator<string> {
  const location = join(output, 'locale', 'Iso3166', 'Part1', 'index.ts');
  const ast = createReexportedTypeAlias(location, 'Alpha2');
  await writeAst(location, ast);
  yield location;

  yield* generateIso3166Part1Alpha2(output, data.alpha2);
}

async function* generateIso3166(output: string, data: IIso3166): AsyncIterableIterator<string> {
  const location = join(output, 'locale', 'Iso3166', 'index.ts');
  const ast = createReexportedTypeAlias(location, 'Part1');
  await writeAst(location, ast);
  yield location;

  yield* generateIso3166Part1(output, data.part1);
}

function createDeclarationImport({ variable, typename }: IDeclaration, path: string): ts.Statement {
  const variableImportSpecifier = ts.createImportSpecifier(undefined, ts.createIdentifier(variable));
  const typenameImportSpecifier = ts.createImportSpecifier(undefined, ts.createIdentifier(typename));
  const namedImports = ts.createNamedImports([variableImportSpecifier, typenameImportSpecifier]);
  const importClause = ts.createImportClause(undefined, namedImports);
  const importPath = ts.createLiteral(path);
  const importDeclaration = ts.createImportDeclaration(undefined, undefined, importClause, importPath);
  return importDeclaration;
}

function createDeclarationExport({ variable, typename }: IDeclaration): ts.Statement {
  const variableExportSpecifier = ts.createExportSpecifier(undefined, ts.createIdentifier(variable));
  const typenameExportSpecifier = ts.createExportSpecifier(undefined, ts.createIdentifier(typename));
  const namedExports = ts.createNamedExports([variableExportSpecifier, typenameExportSpecifier]);
  const importDeclaration = ts.createExportDeclaration(undefined, undefined, namedExports, undefined);
  return importDeclaration;
}

function localeToDeclaration({ language, region, script }: ILocale): IDeclaration {
  const locale = [language, script, region].filter(x => x).join('');
  const typename =
    `I${locale[0].toUpperCase()}${locale.substring(1, locale.length - 1)}${locale[locale.length - 1].toLowerCase()}`;

  return { variable: locale, typename, value: locale, name: locale };
}

async function* generateLocales(output: string, data: IData): AsyncIterableIterator<string> {
  for (const { language, region, script } of data.locale) {
    const { variable: locale, typename } = localeToDeclaration({ language, region, script });
    const localeIdentifier = ts.createIdentifier(locale);
    const location = join(output, 'locale', `${locale}.ts`);

    const importDeclaration = createDefaultImport('ILocale', '@lib/ILocale');

    const languageDeclaration = data.iso639.part1.find(({ value }) => value === language);
    if (!languageDeclaration) { continue; }
    const importLanguage = createDeclarationImport(languageDeclaration, '@lib/locale/Iso639/Part1');

    const ast: Array<ts.Statement> = [
      importDeclaration,
      importLanguage
    ];

    const languageVariableIdentifier = ts.createIdentifier(languageDeclaration.variable);
    const languageProperty = ts.createPropertyAssignment('language', languageVariableIdentifier);
    const objectProperties = [languageProperty];

    const languageTypenameTypeNode = ts.createTypeReferenceNode(languageDeclaration.typename, []);
    const languageSignature = ts.createPropertySignature(
      undefined, 'language', undefined, languageTypenameTypeNode, undefined);
    const interfaceMembers = [languageSignature];

    let comment = `${languageDeclaration.name} language`;

    if (region) {
      const regionDeclaration = data.iso3166.part1.alpha2.find(({ value }) => value === region);
      if (!regionDeclaration) { continue; }
      const importRegion = createDeclarationImport(regionDeclaration, '@lib/locale/Iso3166/Part1/Alpha2');
      ast.push(importRegion);

      const regionVariableIdentifier = ts.createIdentifier(regionDeclaration.variable);
      const regionProperty = ts.createPropertyAssignment('region', regionVariableIdentifier);
      objectProperties.push(regionProperty);

      const regionTypenameTypeNode = ts.createTypeReferenceNode(regionDeclaration.typename, []);
      const regionSignature = ts.createPropertySignature(
        undefined, 'region', undefined, regionTypenameTypeNode, undefined);
      interfaceMembers.push(regionSignature);

      comment += ` spoken in ${regionDeclaration.name}`;
    }

    if (script) {
      const scriptDeclaration = data.script.find(({ value }) => value === script);
      if (!scriptDeclaration) { continue; }
      const importRegion = createDeclarationImport(scriptDeclaration, '@lib/locale/Script');
      ast.push(importRegion);

      const scriptVariableIdentifier = ts.createIdentifier(scriptDeclaration.variable);
      const scriptProperty = ts.createPropertyAssignment('script', scriptVariableIdentifier);
      objectProperties.push(scriptProperty);

      const scriptTypenameTypeNode = ts.createTypeReferenceNode(scriptDeclaration.typename, []);
      const scriptSignature = ts.createPropertySignature(
        undefined, 'script', undefined, scriptTypenameTypeNode, undefined);
      interfaceMembers.push(scriptSignature);

      comment += ` using the ${scriptDeclaration.name} script`;
    }

    const heritageClause = ts.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
      ts.createExpressionWithTypeArguments([], ts.createIdentifier('ILocale'))
    ]);

    const localeInterface = ts.createInterfaceDeclaration(
      undefined, [exportToken], typename, undefined, [heritageClause], interfaceMembers);
    attachJavaScriptDocumentation(localeInterface, `The locale interface for the ${comment}`);

    const objectLiteral = ts.createObjectLiteral(objectProperties, true);
    const localeConst = createExportedConstVariable(locale, typename, objectLiteral);
    attachJavaScriptDocumentation(localeConst, `The locale variable for the ${comment}`);

    const localeExport = ts.createExportAssignment(undefined, undefined, false, localeIdentifier);

    ast.push(localeInterface, localeConst, localeExport);

    await writeAst(location, ast);
    yield location;
  }
}

async function* generateILocale(
  output: string,
  data: IData
): AsyncIterableIterator<string> {
  const location = join(output, 'ILocale.ts');

  if (!data.iso639.part1.length) { throw new TypeError('The data must have some ISO639-1 language codes'); }

  const languageTypenameTypeNode = ts.createTypeReferenceNode('L', []);
  const languageSignature = ts.createPropertySignature(
    undefined, 'language', undefined, languageTypenameTypeNode, undefined);
  attachJavaScriptDocumentation(languageSignature, 'Used to help identify languages, whether spoken, written, ' +
    'signed, or otherwise signaled, for the purpose of communication.  This includes constructed and artificial ' +
    'languages but excludes languages not intended primarily for human communication, such as programming languages.',
    [['see', '{@link Iso639}']]);  // tslint:disable-line:align

  const imports = [createDefaultImport('Iso639', '@lib/locale/Iso639')];
  const interfaceTypes = [
    ts.createTypeParameterDeclaration('L', undefined, ts.createTypeReferenceNode('Iso639', []))
  ];
  const interfaceProperties = [languageSignature];
  const links: Array<[string, string]> = [['see', '{@link Iso639}']];

  if (data.iso3166.part1.alpha2.length) {
    const regionTypenameTypeNode = ts.createTypeReferenceNode('R', []);
    const link: [string, string] = ['see', '{@link Iso3166}'];
    const regionSignature = ts.createPropertySignature(
      undefined, 'region', questionToken, regionTypenameTypeNode, undefined);
    // tslint:disable-next-line:align
    attachJavaScriptDocumentation(regionSignature, 'Used to indicate linguistic variations associated with or ' +
      'appropriate to a specific country, territory, or region. Typically, a region subtag is used to indicate ' +
      'variations such as regional dialects or usage, or region-specific spelling conventions. It can also be ' +
      'used to indicate that content is expressed in a way that is appropriate for use throughout a region, ' +
      'for instance, Spanish content tailored to be useful throughout Latin America.',
      [link]);  // tslint:disable-line:align
    interfaceProperties.push(regionSignature);
    interfaceTypes.push(ts.createTypeParameterDeclaration('R', undefined, ts.createTypeReferenceNode('Iso3166', [])));
    imports.push(createDefaultImport('Iso3166', '@lib/locale/Iso3166'));
    links.push(link);
  }

  if (data.script.length) {
    const scriptTypenameTypeNode = ts.createTypeReferenceNode('S', []);
    const link: [string, string] = ['see', '{@link Script}'];
    const scriptSignature = ts.createPropertySignature(
      undefined, 'script', questionToken, scriptTypenameTypeNode, undefined);
    attachJavaScriptDocumentation(scriptSignature, 'Used to indicate the script or writing system variations that ' +
      'distinguish the written forms of a language or its dialects', [link]);  // tslint:disable-line:align
    interfaceProperties.push(scriptSignature);
    interfaceTypes.push(ts.createTypeParameterDeclaration('S', undefined, ts.createTypeReferenceNode('Script', [])));
    imports.push(createDefaultImport('Script', '@lib/locale/Script'));
    links.push(link);
  }

  const interfaceDeclaration = ts.createInterfaceDeclaration(
    undefined, [exportToken, defaultToken], 'ILocale', interfaceTypes, undefined, interfaceProperties);
  // tslint:disable-next-line:align
  attachJavaScriptDocumentation(interfaceDeclaration, 'The interface for representing a locale. It consists of ' +
    'three parts; `language`, `region` and `script`. The language, by default, is an ISO639-1 two letter string. ' +
    'The region, by default, is an ISO3166-1 two letter string. The script is one of the valid script types ' +
    'available in this library. The `region` and `script` are optional.', links);  // tslint:disable-line:align

  await writeAst(location, imports.concat([interfaceDeclaration]));
  yield location;
}

function flatten(array: Array<ts.Statement>, value: Array<ts.Statement> | ts.Statement): Array<ts.Statement> {
  if (Array.isArray(value)) {
    return array.concat(value);
  } else {
    array.push(value);
    return array;
  }
}

async function* generateLocale(
  output: string,
  data: IData
): AsyncIterableIterator<string> {
  const location = join(output, 'Locale.ts');

  // Filter locales for ones that we have exports for
  const locales = data.locale
    .filter(({ language, region, script }) =>
      data.iso639.part1.some(({ value }) => value === language) &&
      (!region || data.iso3166.part1.alpha2.some(({ value }) => value === region)) &&
      (!script || data.script.some(({ value }) => value === script)))
    .map(localeToDeclaration);

  // Import locales
  const imports = locales.map(d => [
    createDeclarationImport(d, `@lib/locale/${d.variable}`),
    createDeclarationExport(d)
  ])
    .reduce(flatten, []);

  // Union type for the locale
  const typename = 'Locale';
  const variable = `${typename.charAt(0).toLowerCase()}${typename.substring(1)}`;
  const unionType = ts.createUnionTypeNode(locales.map(({ typename: t }) => ts.createTypeReferenceNode(t, [])));
  const union = ts.createTypeAliasDeclaration(undefined, undefined, typename, undefined, unionType);
  attachJavaScriptDocumentation(union, 'The supported locales in this library', [['see', '{@link ILocale}']]);

  // Set of locales
  const array = ts.createArrayLiteral(locales.map(({ variable: v }) => ts.createIdentifier(v)), true);
  const typenameType = ts.createTypeReferenceNode(typename, []);
  const setNew = ts.createNew(ts.createIdentifier('Set'), [typenameType], [array]);
  const setType = ts.createTypeReferenceNode('ReadonlySet', [typenameType]);
  const setStatement = createExportedConstVariable(variable, setType, setNew);
  const example = `<caption>Validation</caption>
import { locale } from '${relative(output, location).split('.').slice(0, -1).join('.')}';
if (!locale.has(someLocaleObject)) {
  throw new TypeError('Unsupported locale');
}`;
  attachJavaScriptDocumentation(union, 'A set of the supported locale values.', [['example', example]]);

  // Default export
  const exportDeclaration = ts.createExportAssignment(undefined, undefined, false, ts.createIdentifier(typename));

  await writeAst(location, imports.concat([union, setStatement, exportDeclaration]));
  yield location;
}

async function* generateScript(
  output: string,
  data: Array<IScript>
): AsyncIterableIterator<string> {
  const location = join(output, 'locale', 'Script.ts');
  const see: [string, string] = ['see', 'https://en.wikipedia.org/wiki/IETF_language_tag'];
  const example = `<caption>Validation</caption>
import { script } from '${relative(output, location).split('.').slice(0, -1).join('.')}';
if (!script.has('someScriptTag')) {
  throw new TypeError('Invalid script');
}`;
  yield* generateDeclarations({
    output: location,
    data,
    variableCommentCallback: ({ name }) => ([`The variable for the ${name} IETF script tag`, [see]]),
    typeAliasCommentCallback: ({ name }) => ([`The type declaration for the ${name} IETF script tag`, [see]]),
    unionCommentCallback: () => (['All possible types for  IETF script tags', [see]]),
    setCommentCallback: () => (['All possible IETF script tags', [see, ['example', example]]])
  });
}

async function* generate(
  output: string,
  data: IData
): AsyncIterableIterator<string> {
  yield* generateLocales(output, data);
  yield* generateIso639(output, data.iso639);
  yield* generateIso3166(output, data.iso3166);
  yield* generateScript(output, data.script);
  yield* generateILocale(output, data);
  yield* generateLocale(output, data);
}

const generator: Generator = async function* typescript(output: Output, data: IData): AsyncIterableIterator<string> {
  if (typeof output !== 'string') {
    throw new TypeError('Must provide a valid output file path as a string');
  }

  yield* generate(output, data);
};

export default generator;

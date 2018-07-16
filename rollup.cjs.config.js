import { join } from 'path';
import replace from 'rollup-plugin-replace';

const { NAME: name, RELDIR: reldir } = process.env;

export default {
  input: join('dist', reldir, `${name}.js`),
  output: {
    file: join('dist', reldir, `${name}.cjs`),
    format: 'cjs',
    name: `ef.carbon.locale.cli.module.${name}`,
    exports: 'named'
  },
  context: 'global',
  external: [
    'clime',
    'fs',
    'path',
    'process',
    'util',
    'node-fetch',
    'diacritics',
    'typescript',
    'word-wrap'
  ],
  plugins: [
    replace({
      '* as wordWrap': 'wordWrap',
      delimiters: ['', '']
    })
  ]
};

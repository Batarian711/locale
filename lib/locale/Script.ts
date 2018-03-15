/**
 * The type declaration for the Cyrillic IETF script tag
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export type Cyrillic = 'Cyrl';

/**
 * The variable for the Cyrillic IETF script tag
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export const cyrillic: Cyrillic = 'Cyrl';

/**
 * The type declaration for the Latin IETF script tag
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export type Latin = 'Latn';

/**
 * The variable for the Latin IETF script tag
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export const latin: Latin = 'Latn';

/**
 * The type declaration for the Han Simplified IETF script tag
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export type HanSimplified = 'Hans';

/**
 * The variable for the Han Simplified IETF script tag
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export const hanSimplified: HanSimplified = 'Hans';

/**
 * The type declaration for the Han Traditional IETF script tag
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export type HanTraditional = 'Hant';

/**
 * The variable for the Han Traditional IETF script tag
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export const hanTraditional: HanTraditional = 'Hant';

/**
 * The type declaration for the Arabic IETF script tag
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export type Arabic = 'Arab';

/**
 * The variable for the Arabic IETF script tag
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export const arabic: Arabic = 'Arab';

/**
 * The type declaration for the Gurmukhi IETF script tag
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export type Gurmukhi = 'Guru';

/**
 * The variable for the Gurmukhi IETF script tag
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
export const gurmukhi: Gurmukhi = 'Guru';

/**
 * All possible types for  IETF script tags
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 */
type Script = Cyrillic
  | Latin
  | HanSimplified
  | HanTraditional
  | Arabic
  | Gurmukhi;

/**
 * All possible IETF script tags
 * @see https://en.wikipedia.org/wiki/IETF_language_tag
 * @example <caption>Validation</caption>
 * import { script } from 'locale/Script';
 * if (!script.has('someScriptTag')) {
 *   throw new TypeError('Invalid script');
 * }
 */
export const script: ReadonlySet<Script> = new Set<Script>([
  cyrillic,
  latin,
  hanSimplified,
  hanTraditional,
  arabic,
  gurmukhi
]);

export default Script;

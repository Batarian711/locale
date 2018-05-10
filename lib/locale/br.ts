import { IImmutable as ILocale } from '@lib/ILocale';
import { breton, Breton } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Breton language
 */
export interface IBr extends ILocale {
  language: Breton;
}

/**
 * The locale variable for the Breton language
 */
export const br: IBr = {
  language: breton,
};

Object.freeze(br);

export default br;

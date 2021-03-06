import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { bambara, Bambara } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Bambara language
 */
export interface IBm extends ILocale {
  language: Bambara;
}

/**
 * The locale variable for the Bambara language
 */
export const bm: IBm = {
  language: bambara,
};

freeze(bm);

export default bm;

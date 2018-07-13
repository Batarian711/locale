import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { manx, Manx } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Manx language
 */
export interface IGv extends ILocale {
  language: Manx;
}

/**
 * The locale variable for the Manx language
 */
export const gv: IGv = {
  language: manx,
};

freeze(gv);

export default gv;

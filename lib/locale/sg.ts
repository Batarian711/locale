import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { sango, Sango } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Sango language
 */
export interface ISg extends ILocale {
  language: Sango;
}

/**
 * The locale variable for the Sango language
 */
export const sg: ISg = {
  language: sango,
};

freeze(sg);

export default sg;

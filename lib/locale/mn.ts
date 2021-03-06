import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { mongolian, Mongolian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Mongolian language
 */
export interface IMn extends ILocale {
  language: Mongolian;
}

/**
 * The locale variable for the Mongolian language
 */
export const mn: IMn = {
  language: mongolian,
};

freeze(mn);

export default mn;

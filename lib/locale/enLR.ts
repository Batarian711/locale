import ILocale from '@lib/ILocale';
import { liberia, Liberia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Liberia
 */
export interface IEnLr extends ILocale {
  language: English;
  region: Liberia;
}

/**
 * The locale variable for the English language spoken in Liberia
 */
export const enLR: IEnLr = {
  language: english,
  region: liberia
};

export default enLR;

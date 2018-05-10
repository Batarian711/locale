import ILocale from '@lib/ILocale';
import { kiribati, Kiribati } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Kiribati
 */
export interface IEnKi extends ILocale {
  language: English;
  region: Kiribati;
}

/**
 * The locale variable for the English language spoken in Kiribati
 */
export const enKI: IEnKi = {
  language: english,
  region: kiribati,
};

export default enKI;

import ILocale from '@lib/ILocale';
import { nauru, Nauru } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Nauru
 */
export interface IEnNr extends ILocale {
  language: English;
  region: Nauru;
}

/**
 * The locale variable for the English language spoken in Nauru
 */
export const enNR: IEnNr = {
  language: english,
  region: nauru,
};

export default enNR;

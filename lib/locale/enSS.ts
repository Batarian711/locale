import ILocale from '@lib/ILocale';
import { southSudan, SouthSudan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in South Sudan
 */
export interface IEnSs extends ILocale {
  language: English;
  region: SouthSudan;
}

/**
 * The locale variable for the English language spoken in South Sudan
 */
export const enSS: IEnSs = {
  language: english,
  region: southSudan,
};

export default enSS;

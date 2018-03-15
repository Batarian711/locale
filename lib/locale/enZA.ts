import ILocale from '@lib/ILocale';
import { southAfrica, SouthAfrica } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in South Africa
 */
export interface IEnZa extends ILocale {
  language: English;
  region: SouthAfrica;
}

/**
 * The locale variable for the English language spoken in South Africa
 */
export const enZA: IEnZa = {
  language: english,
  region: southAfrica
};

export default enZA;

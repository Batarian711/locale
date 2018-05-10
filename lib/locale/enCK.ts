import ILocale from '@lib/ILocale';
import { cookIslands, CookIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Cook Islands
 */
export interface IEnCk extends ILocale {
  language: English;
  region: CookIslands;
}

/**
 * The locale variable for the English language spoken in Cook Islands
 */
export const enCK: IEnCk = {
  language: english,
  region: cookIslands,
};

export default enCK;

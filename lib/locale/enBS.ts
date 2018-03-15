import ILocale from '@lib/ILocale';
import { bahamas, Bahamas } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Bahamas
 */
export interface IEnBs extends ILocale {
  language: English;
  region: Bahamas;
}

/**
 * The locale variable for the English language spoken in Bahamas
 */
export const enBS: IEnBs = {
  language: english,
  region: bahamas
};

export default enBS;

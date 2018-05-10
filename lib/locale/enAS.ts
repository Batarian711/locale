import ILocale from '@lib/ILocale';
import { americanSamoa, AmericanSamoa } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in American Samoa
 */
export interface IEnAs extends ILocale {
  language: English;
  region: AmericanSamoa;
}

/**
 * The locale variable for the English language spoken in American Samoa
 */
export const enAS: IEnAs = {
  language: english,
  region: americanSamoa,
};

export default enAS;

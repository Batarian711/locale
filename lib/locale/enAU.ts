import ILocale from '@lib/ILocale';
import { australia, Australia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Australia
 */
export interface IEnAu extends ILocale {
  language: English;
  region: Australia;
}

/**
 * The locale variable for the English language spoken in Australia
 */
export const enAU: IEnAu = {
  language: english,
  region: australia,
};

export default enAU;

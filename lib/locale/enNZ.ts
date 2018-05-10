import ILocale from '@lib/ILocale';
import { newZealand, NewZealand } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in New Zealand
 */
export interface IEnNz extends ILocale {
  language: English;
  region: NewZealand;
}

/**
 * The locale variable for the English language spoken in New Zealand
 */
export const enNZ: IEnNz = {
  language: english,
  region: newZealand,
};

export default enNZ;

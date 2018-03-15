import ILocale from '@lib/ILocale';
import { niue, Niue } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Niue
 */
export interface IEnNu extends ILocale {
  language: English;
  region: Niue;
}

/**
 * The locale variable for the English language spoken in Niue
 */
export const enNU: IEnNu = {
  language: english,
  region: niue
};

export default enNU;

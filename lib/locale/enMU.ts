import ILocale from '@lib/ILocale';
import { mauritius, Mauritius } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Mauritius
 */
export interface IEnMu extends ILocale {
  language: English;
  region: Mauritius;
}

/**
 * The locale variable for the English language spoken in Mauritius
 */
export const enMU: IEnMu = {
  language: english,
  region: mauritius,
};

export default enMU;

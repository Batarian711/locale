import ILocale from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in India
 */
export interface IEnIn extends ILocale {
  language: English;
  region: India;
}

/**
 * The locale variable for the English language spoken in India
 */
export const enIN: IEnIn = {
  language: english,
  region: india,
};

export default enIN;

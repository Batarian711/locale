import ILocale from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { nepali, Nepali } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Nepali language spoken in India
 */
export interface INeIn extends ILocale {
  language: Nepali;
  region: India;
}

/**
 * The locale variable for the Nepali language spoken in India
 */
export const neIN: INeIn = {
  language: nepali,
  region: india
};

export default neIN;

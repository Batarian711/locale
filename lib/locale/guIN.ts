import ILocale from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { gujarati, Gujarati } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Gujarati language spoken in India
 */
export interface IGuIn extends ILocale {
  language: Gujarati;
  region: India;
}

/**
 * The locale variable for the Gujarati language spoken in India
 */
export const guIN: IGuIn = {
  language: gujarati,
  region: india
};

export default guIN;

import ILocale from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { tamil, Tamil } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tamil language spoken in India
 */
export interface ITaIn extends ILocale {
  language: Tamil;
  region: India;
}

/**
 * The locale variable for the Tamil language spoken in India
 */
export const taIN: ITaIn = {
  language: tamil,
  region: india
};

export default taIN;

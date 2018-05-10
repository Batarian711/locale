import { IImmutable as ILocale } from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { marathi, Marathi } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Marathi language spoken in India
 */
export interface IMrIn extends ILocale {
  language: Marathi;
  region: India;
}

/**
 * The locale variable for the Marathi language spoken in India
 */
export const mrIN: IMrIn = {
  language: marathi,
  region: india,
};

export default mrIN;

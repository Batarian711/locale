import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { bengali, Bengali } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Bengali language spoken in India
 */
export interface IBnIn extends ILocale {
  language: Bengali;
  region: India;
}

/**
 * The locale variable for the Bengali language spoken in India
 */
export const bnIN: IBnIn = {
  language: bengali,
  region: india,
};

freeze(bnIN);

export default bnIN;

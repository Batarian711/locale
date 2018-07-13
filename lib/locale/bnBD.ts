import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { bangladesh, Bangladesh } from '@lib/locale/Iso3166/Part1/Alpha2';
import { bengali, Bengali } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Bengali language spoken in Bangladesh
 */
export interface IBnBd extends ILocale {
  language: Bengali;
  region: Bangladesh;
}

/**
 * The locale variable for the Bengali language spoken in Bangladesh
 */
export const bnBD: IBnBd = {
  language: bengali,
  region: bangladesh,
};

freeze(bnBD);

export default bnBD;

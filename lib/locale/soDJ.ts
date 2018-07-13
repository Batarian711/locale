import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { djibouti, Djibouti } from '@lib/locale/Iso3166/Part1/Alpha2';
import { somali, Somali } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Somali language spoken in Djibouti
 */
export interface ISoDj extends ILocale {
  language: Somali;
  region: Djibouti;
}

/**
 * The locale variable for the Somali language spoken in Djibouti
 */
export const soDJ: ISoDj = {
  language: somali,
  region: djibouti,
};

freeze(soDJ);

export default soDJ;

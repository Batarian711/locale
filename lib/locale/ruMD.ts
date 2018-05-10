import { IImmutable as ILocale } from '@lib/ILocale';
import { moldova, Moldova } from '@lib/locale/Iso3166/Part1/Alpha2';
import { russian, Russian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Russian language spoken in Moldova
 */
export interface IRuMd extends ILocale {
  language: Russian;
  region: Moldova;
}

/**
 * The locale variable for the Russian language spoken in Moldova
 */
export const ruMD: IRuMd = {
  language: russian,
  region: moldova,
};

Object.freeze(ruMD);

export default ruMD;

import { IImmutable as ILocale } from '@lib/ILocale';
import { centralAfricanRepublic, CentralAfricanRepublic } from '@lib/locale/Iso3166/Part1/Alpha2';
import { sango, Sango } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Sango language spoken in Central African Republic
 */
export interface ISgCf extends ILocale {
  language: Sango;
  region: CentralAfricanRepublic;
}

/**
 * The locale variable for the Sango language spoken in Central African Republic
 */
export const sgCF: ISgCf = {
  language: sango,
  region: centralAfricanRepublic,
};

export default sgCF;

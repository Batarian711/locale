import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { centralAfricanRepublic, CentralAfricanRepublic } from '@lib/locale/Iso3166/Part1/Alpha2';
import { lingala, Lingala } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Lingala language spoken in Central African Republic
 */
export interface ILnCf extends ILocale {
  language: Lingala;
  region: CentralAfricanRepublic;
}

/**
 * The locale variable for the Lingala language spoken in Central African Republic
 */
export const lnCF: ILnCf = {
  language: lingala,
  region: centralAfricanRepublic,
};

freeze(lnCF);

export default lnCF;

import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { centralAfricanRepublic, CentralAfricanRepublic } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Central African Republic
 */
export interface IFrCf extends ILocale {
  language: French;
  region: CentralAfricanRepublic;
}

/**
 * The locale variable for the French language spoken in Central African Republic
 */
export const frCF: IFrCf = {
  language: french,
  region: centralAfricanRepublic,
};

freeze(frCF);

export default frCF;

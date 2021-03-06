import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { spain, Spain } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Spain
 */
export interface IEsEs extends ILocale {
  language: Spanish;
  region: Spain;
}

/**
 * The locale variable for the Spanish language spoken in Spain
 */
export const esES: IEsEs = {
  language: spanish,
  region: spain,
};

freeze(esES);

export default esES;

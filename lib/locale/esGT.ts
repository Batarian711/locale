import { IImmutable as ILocale } from '@lib/ILocale';
import { guatemala, Guatemala } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Guatemala
 */
export interface IEsGt extends ILocale {
  language: Spanish;
  region: Guatemala;
}

/**
 * The locale variable for the Spanish language spoken in Guatemala
 */
export const esGT: IEsGt = {
  language: spanish,
  region: guatemala,
};

Object.freeze(esGT);

export default esGT;

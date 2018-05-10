import { IImmutable as ILocale } from '@lib/ILocale';
import { equatorialGuinea, EquatorialGuinea } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Equatorial Guinea
 */
export interface IEsGq extends ILocale {
  language: Spanish;
  region: EquatorialGuinea;
}

/**
 * The locale variable for the Spanish language spoken in Equatorial Guinea
 */
export const esGQ: IEsGq = {
  language: spanish,
  region: equatorialGuinea,
};

Object.freeze(esGQ);

export default esGQ;

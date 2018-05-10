import { IImmutable as ILocale } from '@lib/ILocale';
import { russianFederation, RussianFederation } from '@lib/locale/Iso3166/Part1/Alpha2';
import { ossetian, Ossetian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Ossetian language spoken in Russian Federation
 */
export interface IOsRu extends ILocale {
  language: Ossetian;
  region: RussianFederation;
}

/**
 * The locale variable for the Ossetian language spoken in Russian Federation
 */
export const osRU: IOsRu = {
  language: ossetian,
  region: russianFederation,
};

Object.freeze(osRU);

export default osRU;

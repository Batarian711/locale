import { IImmutable as ILocale } from '@lib/ILocale';
import { costaRica, CostaRica } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Costa Rica
 */
export interface IEsCr extends ILocale {
  language: Spanish;
  region: CostaRica;
}

/**
 * The locale variable for the Spanish language spoken in Costa Rica
 */
export const esCR: IEsCr = {
  language: spanish,
  region: costaRica,
};

Object.freeze(esCR);

export default esCR;

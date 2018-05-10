import { IImmutable as ILocale } from '@lib/ILocale';
import { greenland, Greenland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { kalaallisut, Kalaallisut } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kalaallisut language spoken in Greenland
 */
export interface IKlGl extends ILocale {
  language: Kalaallisut;
  region: Greenland;
}

/**
 * The locale variable for the Kalaallisut language spoken in Greenland
 */
export const klGL: IKlGl = {
  language: kalaallisut,
  region: greenland,
};

Object.freeze(klGL);

export default klGL;

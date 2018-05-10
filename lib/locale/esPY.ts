import { IImmutable as ILocale } from '@lib/ILocale';
import { paraguay, Paraguay } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Paraguay
 */
export interface IEsPy extends ILocale {
  language: Spanish;
  region: Paraguay;
}

/**
 * The locale variable for the Spanish language spoken in Paraguay
 */
export const esPY: IEsPy = {
  language: spanish,
  region: paraguay,
};

Object.freeze(esPY);

export default esPY;

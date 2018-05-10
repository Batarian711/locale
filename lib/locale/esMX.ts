import { IImmutable as ILocale } from '@lib/ILocale';
import { mexico, Mexico } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Mexico
 */
export interface IEsMx extends ILocale {
  language: Spanish;
  region: Mexico;
}

/**
 * The locale variable for the Spanish language spoken in Mexico
 */
export const esMX: IEsMx = {
  language: spanish,
  region: mexico,
};

export default esMX;

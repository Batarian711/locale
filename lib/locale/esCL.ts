import { IImmutable as ILocale } from '@lib/ILocale';
import { chile, Chile } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Chile
 */
export interface IEsCl extends ILocale {
  language: Spanish;
  region: Chile;
}

/**
 * The locale variable for the Spanish language spoken in Chile
 */
export const esCL: IEsCl = {
  language: spanish,
  region: chile,
};

Object.freeze(esCL);

export default esCL;

import { IImmutable as ILocale } from '@lib/ILocale';
import { nicaragua, Nicaragua } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Nicaragua
 */
export interface IEsNi extends ILocale {
  language: Spanish;
  region: Nicaragua;
}

/**
 * The locale variable for the Spanish language spoken in Nicaragua
 */
export const esNI: IEsNi = {
  language: spanish,
  region: nicaragua,
};

export default esNI;

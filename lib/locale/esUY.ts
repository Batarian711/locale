import ILocale from '@lib/ILocale';
import { uruguay, Uruguay } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Uruguay
 */
export interface IEsUy extends ILocale {
  language: Spanish;
  region: Uruguay;
}

/**
 * The locale variable for the Spanish language spoken in Uruguay
 */
export const esUY: IEsUy = {
  language: spanish,
  region: uruguay,
};

export default esUY;

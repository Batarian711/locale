import ILocale from '@lib/ILocale';
import { venezuela, Venezuela } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Venezuela
 */
export interface IEsVe extends ILocale {
  language: Spanish;
  region: Venezuela;
}

/**
 * The locale variable for the Spanish language spoken in Venezuela
 */
export const esVE: IEsVe = {
  language: spanish,
  region: venezuela,
};

export default esVE;

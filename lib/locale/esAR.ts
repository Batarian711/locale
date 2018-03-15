import ILocale from '@lib/ILocale';
import { argentina, Argentina } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Argentina
 */
export interface IEsAr extends ILocale {
  language: Spanish;
  region: Argentina;
}

/**
 * The locale variable for the Spanish language spoken in Argentina
 */
export const esAR: IEsAr = {
  language: spanish,
  region: argentina
};

export default esAR;

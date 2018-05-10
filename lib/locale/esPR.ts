import ILocale from '@lib/ILocale';
import { puertoRico, PuertoRico } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Puerto Rico
 */
export interface IEsPr extends ILocale {
  language: Spanish;
  region: PuertoRico;
}

/**
 * The locale variable for the Spanish language spoken in Puerto Rico
 */
export const esPR: IEsPr = {
  language: spanish,
  region: puertoRico,
};

export default esPR;

import { IImmutable as ILocale } from '@lib/ILocale';
import { elSalvador, ElSalvador } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in El Salvador
 */
export interface IEsSv extends ILocale {
  language: Spanish;
  region: ElSalvador;
}

/**
 * The locale variable for the Spanish language spoken in El Salvador
 */
export const esSV: IEsSv = {
  language: spanish,
  region: elSalvador,
};

Object.freeze(esSV);

export default esSV;

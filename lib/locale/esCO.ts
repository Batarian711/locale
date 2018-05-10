import ILocale from '@lib/ILocale';
import { colombia, Colombia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Colombia
 */
export interface IEsCo extends ILocale {
  language: Spanish;
  region: Colombia;
}

/**
 * The locale variable for the Spanish language spoken in Colombia
 */
export const esCO: IEsCo = {
  language: spanish,
  region: colombia,
};

export default esCO;

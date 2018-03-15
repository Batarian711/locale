import ILocale from '@lib/ILocale';
import { dominicanRepublic, DominicanRepublic } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Dominican Republic
 */
export interface IEsDo extends ILocale {
  language: Spanish;
  region: DominicanRepublic;
}

/**
 * The locale variable for the Spanish language spoken in Dominican Republic
 */
export const esDO: IEsDo = {
  language: spanish,
  region: dominicanRepublic
};

export default esDO;

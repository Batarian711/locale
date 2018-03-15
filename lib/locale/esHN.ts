import ILocale from '@lib/ILocale';
import { honduras, Honduras } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Honduras
 */
export interface IEsHn extends ILocale {
  language: Spanish;
  region: Honduras;
}

/**
 * The locale variable for the Spanish language spoken in Honduras
 */
export const esHN: IEsHn = {
  language: spanish,
  region: honduras
};

export default esHN;

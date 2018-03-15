import ILocale from '@lib/ILocale';
import { bolivia, Bolivia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Bolivia
 */
export interface IEsBo extends ILocale {
  language: Spanish;
  region: Bolivia;
}

/**
 * The locale variable for the Spanish language spoken in Bolivia
 */
export const esBO: IEsBo = {
  language: spanish,
  region: bolivia
};

export default esBO;

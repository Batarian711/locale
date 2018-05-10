import ILocale from '@lib/ILocale';
import { andorra, Andorra } from '@lib/locale/Iso3166/Part1/Alpha2';
import { catalan, Catalan } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Catalan language spoken in Andorra
 */
export interface ICaAd extends ILocale {
  language: Catalan;
  region: Andorra;
}

/**
 * The locale variable for the Catalan language spoken in Andorra
 */
export const caAD: ICaAd = {
  language: catalan,
  region: andorra,
};

export default caAD;

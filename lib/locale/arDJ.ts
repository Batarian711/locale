import ILocale from '@lib/ILocale';
import { djibouti, Djibouti } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Djibouti
 */
export interface IArDj extends ILocale {
  language: Arabic;
  region: Djibouti;
}

/**
 * The locale variable for the Arabic language spoken in Djibouti
 */
export const arDJ: IArDj = {
  language: arabic,
  region: djibouti,
};

export default arDJ;

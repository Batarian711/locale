import ILocale from '@lib/ILocale';
import { djibouti, Djibouti } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Djibouti
 */
export interface IFrDj extends ILocale {
  language: French;
  region: Djibouti;
}

/**
 * The locale variable for the French language spoken in Djibouti
 */
export const frDJ: IFrDj = {
  language: french,
  region: djibouti
};

export default frDJ;

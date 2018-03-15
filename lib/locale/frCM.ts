import ILocale from '@lib/ILocale';
import { cameroon, Cameroon } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Cameroon
 */
export interface IFrCm extends ILocale {
  language: French;
  region: Cameroon;
}

/**
 * The locale variable for the French language spoken in Cameroon
 */
export const frCM: IFrCm = {
  language: french,
  region: cameroon
};

export default frCM;

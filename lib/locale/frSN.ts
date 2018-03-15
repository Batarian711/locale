import ILocale from '@lib/ILocale';
import { senegal, Senegal } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Senegal
 */
export interface IFrSn extends ILocale {
  language: French;
  region: Senegal;
}

/**
 * The locale variable for the French language spoken in Senegal
 */
export const frSN: IFrSn = {
  language: french,
  region: senegal
};

export default frSN;

import ILocale from '@lib/ILocale';
import { haiti, Haiti } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Haiti
 */
export interface IFrHt extends ILocale {
  language: French;
  region: Haiti;
}

/**
 * The locale variable for the French language spoken in Haiti
 */
export const frHT: IFrHt = {
  language: french,
  region: haiti,
};

export default frHT;

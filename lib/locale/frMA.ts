import ILocale from '@lib/ILocale';
import { morocco, Morocco } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Morocco
 */
export interface IFrMa extends ILocale {
  language: French;
  region: Morocco;
}

/**
 * The locale variable for the French language spoken in Morocco
 */
export const frMA: IFrMa = {
  language: french,
  region: morocco,
};

export default frMA;

import ILocale from '@lib/ILocale';
import { reunion, Reunion } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Réunion
 */
export interface IFrRe extends ILocale {
  language: French;
  region: Reunion;
}

/**
 * The locale variable for the French language spoken in Réunion
 */
export const frRE: IFrRe = {
  language: french,
  region: reunion,
};

export default frRE;

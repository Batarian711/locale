import ILocale from '@lib/ILocale';
import { martinique, Martinique } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Martinique
 */
export interface IFrMq extends ILocale {
  language: French;
  region: Martinique;
}

/**
 * The locale variable for the French language spoken in Martinique
 */
export const frMQ: IFrMq = {
  language: french,
  region: martinique,
};

export default frMQ;

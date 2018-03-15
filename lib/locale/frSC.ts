import ILocale from '@lib/ILocale';
import { seychelles, Seychelles } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Seychelles
 */
export interface IFrSc extends ILocale {
  language: French;
  region: Seychelles;
}

/**
 * The locale variable for the French language spoken in Seychelles
 */
export const frSC: IFrSc = {
  language: french,
  region: seychelles
};

export default frSC;

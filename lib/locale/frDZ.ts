import ILocale from '@lib/ILocale';
import { algeria, Algeria } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Algeria
 */
export interface IFrDz extends ILocale {
  language: French;
  region: Algeria;
}

/**
 * The locale variable for the French language spoken in Algeria
 */
export const frDZ: IFrDz = {
  language: french,
  region: algeria,
};

export default frDZ;

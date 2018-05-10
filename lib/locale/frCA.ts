import ILocale from '@lib/ILocale';
import { canada, Canada } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Canada
 */
export interface IFrCa extends ILocale {
  language: French;
  region: Canada;
}

/**
 * The locale variable for the French language spoken in Canada
 */
export const frCA: IFrCa = {
  language: french,
  region: canada,
};

export default frCA;

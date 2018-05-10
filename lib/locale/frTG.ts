import ILocale from '@lib/ILocale';
import { togo, Togo } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Togo
 */
export interface IFrTg extends ILocale {
  language: French;
  region: Togo;
}

/**
 * The locale variable for the French language spoken in Togo
 */
export const frTG: IFrTg = {
  language: french,
  region: togo,
};

export default frTG;

import ILocale from '@lib/ILocale';
import { burkinaFaso, BurkinaFaso } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Burkina Faso
 */
export interface IFrBf extends ILocale {
  language: French;
  region: BurkinaFaso;
}

/**
 * The locale variable for the French language spoken in Burkina Faso
 */
export const frBF: IFrBf = {
  language: french,
  region: burkinaFaso
};

export default frBF;

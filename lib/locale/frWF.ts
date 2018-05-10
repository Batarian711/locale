import ILocale from '@lib/ILocale';
import { wallisAndFutuna, WallisAndFutuna } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Wallis and Futuna
 */
export interface IFrWf extends ILocale {
  language: French;
  region: WallisAndFutuna;
}

/**
 * The locale variable for the French language spoken in Wallis and Futuna
 */
export const frWF: IFrWf = {
  language: french,
  region: wallisAndFutuna,
};

export default frWF;

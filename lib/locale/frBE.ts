import ILocale from '@lib/ILocale';
import { belgium, Belgium } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Belgium
 */
export interface IFrBe extends ILocale {
  language: French;
  region: Belgium;
}

/**
 * The locale variable for the French language spoken in Belgium
 */
export const frBE: IFrBe = {
  language: french,
  region: belgium
};

export default frBE;

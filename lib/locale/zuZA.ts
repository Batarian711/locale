import ILocale from '@lib/ILocale';
import { southAfrica, SouthAfrica } from '@lib/locale/Iso3166/Part1/Alpha2';
import { zulu, Zulu } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Zulu language spoken in South Africa
 */
export interface IZuZa extends ILocale {
  language: Zulu;
  region: SouthAfrica;
}

/**
 * The locale variable for the Zulu language spoken in South Africa
 */
export const zuZA: IZuZa = {
  language: zulu,
  region: southAfrica,
};

export default zuZA;

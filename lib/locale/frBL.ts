import ILocale from '@lib/ILocale';
import { saintBarthelemy, SaintBarthelemy } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Saint Barthélemy
 */
export interface IFrBl extends ILocale {
  language: French;
  region: SaintBarthelemy;
}

/**
 * The locale variable for the French language spoken in Saint Barthélemy
 */
export const frBL: IFrBl = {
  language: french,
  region: saintBarthelemy,
};

export default frBL;

import { IImmutable as ILocale } from '@lib/ILocale';
import { unitedStatesVirginIslands, UnitedStatesVirginIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in United States Virgin Islands
 */
export interface IEnVi extends ILocale {
  language: English;
  region: UnitedStatesVirginIslands;
}

/**
 * The locale variable for the English language spoken in United States Virgin Islands
 */
export const enVI: IEnVi = {
  language: english,
  region: unitedStatesVirginIslands,
};

export default enVI;

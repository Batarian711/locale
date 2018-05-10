import { IImmutable as ILocale } from '@lib/ILocale';
import { unitedStatesMinorOutlyingIslands, UnitedStatesMinorOutlyingIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in United States Minor Outlying Islands
 */
export interface IEnUm extends ILocale {
  language: English;
  region: UnitedStatesMinorOutlyingIslands;
}

/**
 * The locale variable for the English language spoken in United States Minor Outlying Islands
 */
export const enUM: IEnUm = {
  language: english,
  region: unitedStatesMinorOutlyingIslands,
};

export default enUM;

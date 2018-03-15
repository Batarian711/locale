import ILocale from '@lib/ILocale';
import { turksAndCaicosIslands, TurksAndCaicosIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Turks and Caicos Islands
 */
export interface IEnTc extends ILocale {
  language: English;
  region: TurksAndCaicosIslands;
}

/**
 * The locale variable for the English language spoken in Turks and Caicos Islands
 */
export const enTC: IEnTc = {
  language: english,
  region: turksAndCaicosIslands
};

export default enTC;

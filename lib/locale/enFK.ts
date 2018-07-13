import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { falklandIslands, FalklandIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Falkland Islands
 */
export interface IEnFk extends ILocale {
  language: English;
  region: FalklandIslands;
}

/**
 * The locale variable for the English language spoken in Falkland Islands
 */
export const enFK: IEnFk = {
  language: english,
  region: falklandIslands,
};

freeze(enFK);

export default enFK;

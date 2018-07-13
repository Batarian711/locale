import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { caymanIslands, CaymanIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Cayman Islands
 */
export interface IEnKy extends ILocale {
  language: English;
  region: CaymanIslands;
}

/**
 * The locale variable for the English language spoken in Cayman Islands
 */
export const enKY: IEnKy = {
  language: english,
  region: caymanIslands,
};

freeze(enKY);

export default enKY;

import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { britishVirginIslands, BritishVirginIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in British Virgin Islands
 */
export interface IEnVg extends ILocale {
  language: English;
  region: BritishVirginIslands;
}

/**
 * The locale variable for the English language spoken in British Virgin Islands
 */
export const enVG: IEnVg = {
  language: english,
  region: britishVirginIslands,
};

freeze(enVG);

export default enVG;

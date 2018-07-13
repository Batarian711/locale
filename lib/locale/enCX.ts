import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { christmasIsland, ChristmasIsland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Christmas Island
 */
export interface IEnCx extends ILocale {
  language: English;
  region: ChristmasIsland;
}

/**
 * The locale variable for the English language spoken in Christmas Island
 */
export const enCX: IEnCx = {
  language: english,
  region: christmasIsland,
};

freeze(enCX);

export default enCX;

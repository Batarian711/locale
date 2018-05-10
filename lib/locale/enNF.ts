import { IImmutable as ILocale } from '@lib/ILocale';
import { norfolkIsland, NorfolkIsland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Norfolk Island
 */
export interface IEnNf extends ILocale {
  language: English;
  region: NorfolkIsland;
}

/**
 * The locale variable for the English language spoken in Norfolk Island
 */
export const enNF: IEnNf = {
  language: english,
  region: norfolkIsland,
};

export default enNF;

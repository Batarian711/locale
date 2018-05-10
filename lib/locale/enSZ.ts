import { IImmutable as ILocale } from '@lib/ILocale';
import { swaziland, Swaziland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Swaziland
 */
export interface IEnSz extends ILocale {
  language: English;
  region: Swaziland;
}

/**
 * The locale variable for the English language spoken in Swaziland
 */
export const enSZ: IEnSz = {
  language: english,
  region: swaziland,
};

export default enSZ;

import { IImmutable as ILocale } from '@lib/ILocale';
import { solomonIslands, SolomonIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Solomon Islands
 */
export interface IEnSb extends ILocale {
  language: English;
  region: SolomonIslands;
}

/**
 * The locale variable for the English language spoken in Solomon Islands
 */
export const enSB: IEnSb = {
  language: english,
  region: solomonIslands,
};

Object.freeze(enSB);

export default enSB;

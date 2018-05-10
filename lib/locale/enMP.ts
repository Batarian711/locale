import ILocale from '@lib/ILocale';
import { northernMarianaIslands, NorthernMarianaIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Northern Mariana Islands
 */
export interface IEnMp extends ILocale {
  language: English;
  region: NorthernMarianaIslands;
}

/**
 * The locale variable for the English language spoken in Northern Mariana Islands
 */
export const enMP: IEnMp = {
  language: english,
  region: northernMarianaIslands,
};

export default enMP;

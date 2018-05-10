import ILocale from '@lib/ILocale';
import { marshallIslands, MarshallIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Marshall Islands
 */
export interface IEnMh extends ILocale {
  language: English;
  region: MarshallIslands;
}

/**
 * The locale variable for the English language spoken in Marshall Islands
 */
export const enMH: IEnMh = {
  language: english,
  region: marshallIslands,
};

export default enMH;

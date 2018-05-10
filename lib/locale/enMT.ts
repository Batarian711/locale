import ILocale from '@lib/ILocale';
import { malta, Malta } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Malta
 */
export interface IEnMt extends ILocale {
  language: English;
  region: Malta;
}

/**
 * The locale variable for the English language spoken in Malta
 */
export const enMT: IEnMt = {
  language: english,
  region: malta,
};

export default enMT;

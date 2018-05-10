import { IImmutable as ILocale } from '@lib/ILocale';
import { gibraltar, Gibraltar } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Gibraltar
 */
export interface IEnGi extends ILocale {
  language: English;
  region: Gibraltar;
}

/**
 * The locale variable for the English language spoken in Gibraltar
 */
export const enGI: IEnGi = {
  language: english,
  region: gibraltar,
};

Object.freeze(enGI);

export default enGI;

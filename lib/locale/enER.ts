import { IImmutable as ILocale } from '@lib/ILocale';
import { eritrea, Eritrea } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Eritrea
 */
export interface IEnEr extends ILocale {
  language: English;
  region: Eritrea;
}

/**
 * The locale variable for the English language spoken in Eritrea
 */
export const enER: IEnEr = {
  language: english,
  region: eritrea,
};

export default enER;

import { IImmutable as ILocale } from '@lib/ILocale';
import { ireland, Ireland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Ireland
 */
export interface IEnIe extends ILocale {
  language: English;
  region: Ireland;
}

/**
 * The locale variable for the English language spoken in Ireland
 */
export const enIE: IEnIe = {
  language: english,
  region: ireland,
};

export default enIE;

import { IImmutable as ILocale } from '@lib/ILocale';
import { nepal, Nepal } from '@lib/locale/Iso3166/Part1/Alpha2';
import { nepali, Nepali } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Nepali language spoken in Nepal
 */
export interface INeNp extends ILocale {
  language: Nepali;
  region: Nepal;
}

/**
 * The locale variable for the Nepali language spoken in Nepal
 */
export const neNP: INeNp = {
  language: nepali,
  region: nepal,
};

export default neNP;

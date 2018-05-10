import { IImmutable as ILocale } from '@lib/ILocale';
import { micronesia, Micronesia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Micronesia
 */
export interface IEnFm extends ILocale {
  language: English;
  region: Micronesia;
}

/**
 * The locale variable for the English language spoken in Micronesia
 */
export const enFM: IEnFm = {
  language: english,
  region: micronesia,
};

export default enFM;

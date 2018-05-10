import { IImmutable as ILocale } from '@lib/ILocale';
import { guam, Guam } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Guam
 */
export interface IEnGu extends ILocale {
  language: English;
  region: Guam;
}

/**
 * The locale variable for the English language spoken in Guam
 */
export const enGU: IEnGu = {
  language: english,
  region: guam,
};

export default enGU;

import { IImmutable as ILocale } from '@lib/ILocale';
import { gambia, Gambia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Gambia
 */
export interface IEnGm extends ILocale {
  language: English;
  region: Gambia;
}

/**
 * The locale variable for the English language spoken in Gambia
 */
export const enGM: IEnGm = {
  language: english,
  region: gambia,
};

export default enGM;

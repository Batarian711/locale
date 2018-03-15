import ILocale from '@lib/ILocale';
import { luxembourg, Luxembourg } from '@lib/locale/Iso3166/Part1/Alpha2';
import { luxembourgish, Luxembourgish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Luxembourgish language spoken in Luxembourg
 */
export interface ILbLu extends ILocale {
  language: Luxembourgish;
  region: Luxembourg;
}

/**
 * The locale variable for the Luxembourgish language spoken in Luxembourg
 */
export const lbLU: ILbLu = {
  language: luxembourgish,
  region: luxembourg
};

export default lbLU;

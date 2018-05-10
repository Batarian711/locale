import ILocale from '@lib/ILocale';
import { luxembourgish, Luxembourgish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Luxembourgish language
 */
export interface ILb extends ILocale {
  language: Luxembourgish;
}

/**
 * The locale variable for the Luxembourgish language
 */
export const lb: ILb = {
  language: luxembourgish,
};

export default lb;

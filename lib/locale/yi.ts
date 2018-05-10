import ILocale from '@lib/ILocale';
import { yiddish, Yiddish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Yiddish language
 */
export interface IYi extends ILocale {
  language: Yiddish;
}

/**
 * The locale variable for the Yiddish language
 */
export const yi: IYi = {
  language: yiddish,
};

export default yi;

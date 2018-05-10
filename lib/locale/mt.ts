import ILocale from '@lib/ILocale';
import { maltese, Maltese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Maltese language
 */
export interface IMt extends ILocale {
  language: Maltese;
}

/**
 * The locale variable for the Maltese language
 */
export const mt: IMt = {
  language: maltese,
};

export default mt;

import ILocale from '@lib/ILocale';
import { macedonian, Macedonian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Macedonian language
 */
export interface IMk extends ILocale {
  language: Macedonian;
}

/**
 * The locale variable for the Macedonian language
 */
export const mk: IMk = {
  language: macedonian
};

export default mk;

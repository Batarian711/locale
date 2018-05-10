import ILocale from '@lib/ILocale';
import { tagalog, Tagalog } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tagalog language
 */
export interface ITl extends ILocale {
  language: Tagalog;
}

/**
 * The locale variable for the Tagalog language
 */
export const tl: ITl = {
  language: tagalog,
};

export default tl;

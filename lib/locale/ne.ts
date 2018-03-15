import ILocale from '@lib/ILocale';
import { nepali, Nepali } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Nepali language
 */
export interface INe extends ILocale {
  language: Nepali;
}

/**
 * The locale variable for the Nepali language
 */
export const ne: INe = {
  language: nepali
};

export default ne;

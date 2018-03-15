import ILocale from '@lib/ILocale';
import { malayalam, Malayalam } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Malayalam language
 */
export interface IMl extends ILocale {
  language: Malayalam;
}

/**
 * The locale variable for the Malayalam language
 */
export const ml: IMl = {
  language: malayalam
};

export default ml;

import ILocale from '@lib/ILocale';
import { amharic, Amharic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Amharic language
 */
export interface IAm extends ILocale {
  language: Amharic;
}

/**
 * The locale variable for the Amharic language
 */
export const am: IAm = {
  language: amharic,
};

export default am;

import { IImmutable as ILocale } from '@lib/ILocale';
import { telugu, Telugu } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Telugu language
 */
export interface ITe extends ILocale {
  language: Telugu;
}

/**
 * The locale variable for the Telugu language
 */
export const te: ITe = {
  language: telugu,
};

export default te;

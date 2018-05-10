import { IImmutable as ILocale } from '@lib/ILocale';
import { marathi, Marathi } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Marathi language
 */
export interface IMr extends ILocale {
  language: Marathi;
}

/**
 * The locale variable for the Marathi language
 */
export const mr: IMr = {
  language: marathi,
};

export default mr;

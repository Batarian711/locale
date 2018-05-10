import { IImmutable as ILocale } from '@lib/ILocale';
import { turkish, Turkish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Turkish language
 */
export interface ITr extends ILocale {
  language: Turkish;
}

/**
 * The locale variable for the Turkish language
 */
export const tr: ITr = {
  language: turkish,
};

Object.freeze(tr);

export default tr;

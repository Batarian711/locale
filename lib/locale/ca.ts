import { IImmutable as ILocale } from '@lib/ILocale';
import { catalan, Catalan } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Catalan language
 */
export interface ICa extends ILocale {
  language: Catalan;
}

/**
 * The locale variable for the Catalan language
 */
export const ca: ICa = {
  language: catalan,
};

Object.freeze(ca);

export default ca;

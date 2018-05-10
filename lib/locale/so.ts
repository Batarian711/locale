import { IImmutable as ILocale } from '@lib/ILocale';
import { somali, Somali } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Somali language
 */
export interface ISo extends ILocale {
  language: Somali;
}

/**
 * The locale variable for the Somali language
 */
export const so: ISo = {
  language: somali,
};

Object.freeze(so);

export default so;

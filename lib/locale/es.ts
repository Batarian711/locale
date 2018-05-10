import { IImmutable as ILocale } from '@lib/ILocale';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language
 */
export interface IEs extends ILocale {
  language: Spanish;
}

/**
 * The locale variable for the Spanish language
 */
export const es: IEs = {
  language: spanish,
};

Object.freeze(es);

export default es;

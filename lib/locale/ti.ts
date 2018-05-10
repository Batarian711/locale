import { IImmutable as ILocale } from '@lib/ILocale';
import { tigrinya, Tigrinya } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tigrinya language
 */
export interface ITi extends ILocale {
  language: Tigrinya;
}

/**
 * The locale variable for the Tigrinya language
 */
export const ti: ITi = {
  language: tigrinya,
};

Object.freeze(ti);

export default ti;

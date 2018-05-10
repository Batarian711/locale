import { IImmutable as ILocale } from '@lib/ILocale';
import { hebrew, Hebrew } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Hebrew language
 */
export interface IHe extends ILocale {
  language: Hebrew;
}

/**
 * The locale variable for the Hebrew language
 */
export const he: IHe = {
  language: hebrew,
};

Object.freeze(he);

export default he;

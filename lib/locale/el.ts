import { IImmutable as ILocale } from '@lib/ILocale';
import { greek, Greek } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Greek language
 */
export interface IEl extends ILocale {
  language: Greek;
}

/**
 * The locale variable for the Greek language
 */
export const el: IEl = {
  language: greek,
};

Object.freeze(el);

export default el;

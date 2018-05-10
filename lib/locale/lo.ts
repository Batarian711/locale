import { IImmutable as ILocale } from '@lib/ILocale';
import { lao, Lao } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Lao language
 */
export interface ILo extends ILocale {
  language: Lao;
}

/**
 * The locale variable for the Lao language
 */
export const lo: ILo = {
  language: lao,
};

Object.freeze(lo);

export default lo;

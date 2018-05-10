import { IImmutable as ILocale } from '@lib/ILocale';
import { portuguese, Portuguese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Portuguese language
 */
export interface IPt extends ILocale {
  language: Portuguese;
}

/**
 * The locale variable for the Portuguese language
 */
export const pt: IPt = {
  language: portuguese,
};

export default pt;

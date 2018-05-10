import { IImmutable as ILocale } from '@lib/ILocale';
import { burmese, Burmese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Burmese language
 */
export interface IMy extends ILocale {
  language: Burmese;
}

/**
 * The locale variable for the Burmese language
 */
export const my: IMy = {
  language: burmese,
};

export default my;

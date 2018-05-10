import { IImmutable as ILocale } from '@lib/ILocale';
import { bulgarian, Bulgarian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Bulgarian language
 */
export interface IBg extends ILocale {
  language: Bulgarian;
}

/**
 * The locale variable for the Bulgarian language
 */
export const bg: IBg = {
  language: bulgarian,
};

Object.freeze(bg);

export default bg;

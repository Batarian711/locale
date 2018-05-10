import { IImmutable as ILocale } from '@lib/ILocale';
import { tamil, Tamil } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tamil language
 */
export interface ITa extends ILocale {
  language: Tamil;
}

/**
 * The locale variable for the Tamil language
 */
export const ta: ITa = {
  language: tamil,
};

Object.freeze(ta);

export default ta;

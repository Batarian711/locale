import { IImmutable as ILocale } from '@lib/ILocale';
import { japanese, Japanese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Japanese language
 */
export interface IJa extends ILocale {
  language: Japanese;
}

/**
 * The locale variable for the Japanese language
 */
export const ja: IJa = {
  language: japanese,
};

export default ja;

import { IImmutable as ILocale } from '@lib/ILocale';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language
 */
export interface IEn extends ILocale {
  language: English;
}

/**
 * The locale variable for the English language
 */
export const en: IEn = {
  language: english,
};

Object.freeze(en);

export default en;

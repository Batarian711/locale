import { IImmutable as ILocale } from '@lib/ILocale';
import { thai, Thai } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Thai language
 */
export interface ITh extends ILocale {
  language: Thai;
}

/**
 * The locale variable for the Thai language
 */
export const th: ITh = {
  language: thai,
};

Object.freeze(th);

export default th;

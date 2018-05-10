import { IImmutable as ILocale } from '@lib/ILocale';
import { korean, Korean } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Korean language
 */
export interface IKo extends ILocale {
  language: Korean;
}

/**
 * The locale variable for the Korean language
 */
export const ko: IKo = {
  language: korean,
};

export default ko;

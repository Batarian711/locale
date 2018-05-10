import { IImmutable as ILocale } from '@lib/ILocale';
import { estonian, Estonian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Estonian language
 */
export interface IEt extends ILocale {
  language: Estonian;
}

/**
 * The locale variable for the Estonian language
 */
export const et: IEt = {
  language: estonian,
};

export default et;

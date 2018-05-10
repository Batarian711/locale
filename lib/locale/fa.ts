import { IImmutable as ILocale } from '@lib/ILocale';
import { persian, Persian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Persian language
 */
export interface IFa extends ILocale {
  language: Persian;
}

/**
 * The locale variable for the Persian language
 */
export const fa: IFa = {
  language: persian,
};

Object.freeze(fa);

export default fa;

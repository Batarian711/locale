import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { cornish, Cornish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Cornish language
 */
export interface IKw extends ILocale {
  language: Cornish;
}

/**
 * The locale variable for the Cornish language
 */
export const kw: IKw = {
  language: cornish,
};

freeze(kw);

export default kw;

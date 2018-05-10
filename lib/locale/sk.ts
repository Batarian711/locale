import { IImmutable as ILocale } from '@lib/ILocale';
import { slovak, Slovak } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Slovak language
 */
export interface ISk extends ILocale {
  language: Slovak;
}

/**
 * The locale variable for the Slovak language
 */
export const sk: ISk = {
  language: slovak,
};

Object.freeze(sk);

export default sk;

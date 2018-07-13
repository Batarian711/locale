import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { kikuyu, Kikuyu } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kikuyu language
 */
export interface IKi extends ILocale {
  language: Kikuyu;
}

/**
 * The locale variable for the Kikuyu language
 */
export const ki: IKi = {
  language: kikuyu,
};

freeze(ki);

export default ki;

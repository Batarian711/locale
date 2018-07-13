import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { ganda, Ganda } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Ganda language
 */
export interface ILg extends ILocale {
  language: Ganda;
}

/**
 * The locale variable for the Ganda language
 */
export const lg: ILg = {
  language: ganda,
};

freeze(lg);

export default lg;

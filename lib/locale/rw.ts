import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { kinyarwanda, Kinyarwanda } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kinyarwanda language
 */
export interface IRw extends ILocale {
  language: Kinyarwanda;
}

/**
 * The locale variable for the Kinyarwanda language
 */
export const rw: IRw = {
  language: kinyarwanda,
};

freeze(rw);

export default rw;

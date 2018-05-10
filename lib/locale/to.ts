import { IImmutable as ILocale } from '@lib/ILocale';
import { tongan, Tongan } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tongan language
 */
export interface ITo extends ILocale {
  language: Tongan;
}

/**
 * The locale variable for the Tongan language
 */
export const to: ITo = {
  language: tongan,
};

export default to;

import { IImmutable as ILocale } from '@lib/ILocale';
import { danish, Danish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Danish language
 */
export interface IDa extends ILocale {
  language: Danish;
}

/**
 * The locale variable for the Danish language
 */
export const da: IDa = {
  language: danish,
};

export default da;

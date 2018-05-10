import { IImmutable as ILocale } from '@lib/ILocale';
import { afrikaans, Afrikaans } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Afrikaans language
 */
export interface IAf extends ILocale {
  language: Afrikaans;
}

/**
 * The locale variable for the Afrikaans language
 */
export const af: IAf = {
  language: afrikaans,
};

Object.freeze(af);

export default af;

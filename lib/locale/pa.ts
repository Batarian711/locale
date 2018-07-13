import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { punjabi, Punjabi } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Punjabi language
 */
export interface IPa extends ILocale {
  language: Punjabi;
}

/**
 * The locale variable for the Punjabi language
 */
export const pa: IPa = {
  language: punjabi,
};

freeze(pa);

export default pa;

import { IImmutable as ILocale } from '@lib/ILocale';
import { albanian, Albanian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Albanian language
 */
export interface ISq extends ILocale {
  language: Albanian;
}

/**
 * The locale variable for the Albanian language
 */
export const sq: ISq = {
  language: albanian,
};

Object.freeze(sq);

export default sq;

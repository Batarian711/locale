import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { oriya, Oriya } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Oriya language
 */
export interface IOr extends ILocale {
  language: Oriya;
}

/**
 * The locale variable for the Oriya language
 */
export const or: IOr = {
  language: oriya,
};

freeze(or);

export default or;

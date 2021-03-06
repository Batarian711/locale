import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { romansh, Romansh } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Romansh language
 */
export interface IRm extends ILocale {
  language: Romansh;
}

/**
 * The locale variable for the Romansh language
 */
export const rm: IRm = {
  language: romansh,
};

freeze(rm);

export default rm;

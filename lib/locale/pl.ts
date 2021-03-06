import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { polish, Polish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Polish language
 */
export interface IPl extends ILocale {
  language: Polish;
}

/**
 * The locale variable for the Polish language
 */
export const pl: IPl = {
  language: polish,
};

freeze(pl);

export default pl;

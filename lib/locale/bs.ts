import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { bosnian, Bosnian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Bosnian language
 */
export interface IBs extends ILocale {
  language: Bosnian;
}

/**
 * The locale variable for the Bosnian language
 */
export const bs: IBs = {
  language: bosnian,
};

freeze(bs);

export default bs;

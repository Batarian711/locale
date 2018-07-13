import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { uzbek, Uzbek } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Uzbek language
 */
export interface IUz extends ILocale {
  language: Uzbek;
}

/**
 * The locale variable for the Uzbek language
 */
export const uz: IUz = {
  language: uzbek,
};

freeze(uz);

export default uz;

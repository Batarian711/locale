import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { bengali, Bengali } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Bengali language
 */
export interface IBn extends ILocale {
  language: Bengali;
}

/**
 * The locale variable for the Bengali language
 */
export const bn: IBn = {
  language: bengali,
};

freeze(bn);

export default bn;

import { IImmutable as ILocale } from '@lib/ILocale';
import { kalaallisut, Kalaallisut } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kalaallisut language
 */
export interface IKl extends ILocale {
  language: Kalaallisut;
}

/**
 * The locale variable for the Kalaallisut language
 */
export const kl: IKl = {
  language: kalaallisut,
};

export default kl;

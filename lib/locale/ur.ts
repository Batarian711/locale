import { IImmutable as ILocale } from '@lib/ILocale';
import { urdu, Urdu } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Urdu language
 */
export interface IUr extends ILocale {
  language: Urdu;
}

/**
 * The locale variable for the Urdu language
 */
export const ur: IUr = {
  language: urdu,
};

Object.freeze(ur);

export default ur;

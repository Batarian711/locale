import { IImmutable as ILocale } from '@lib/ILocale';
import { armenian, Armenian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Armenian language
 */
export interface IHy extends ILocale {
  language: Armenian;
}

/**
 * The locale variable for the Armenian language
 */
export const hy: IHy = {
  language: armenian,
};

Object.freeze(hy);

export default hy;

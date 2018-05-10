import { IImmutable as ILocale } from '@lib/ILocale';
import { ossetian, Ossetian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Ossetian language
 */
export interface IOs extends ILocale {
  language: Ossetian;
}

/**
 * The locale variable for the Ossetian language
 */
export const os: IOs = {
  language: ossetian,
};

Object.freeze(os);

export default os;

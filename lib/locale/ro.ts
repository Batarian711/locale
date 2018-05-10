import { IImmutable as ILocale } from '@lib/ILocale';
import { romanian, Romanian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Romanian language
 */
export interface IRo extends ILocale {
  language: Romanian;
}

/**
 * The locale variable for the Romanian language
 */
export const ro: IRo = {
  language: romanian,
};

Object.freeze(ro);

export default ro;

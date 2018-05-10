import { IImmutable as ILocale } from '@lib/ILocale';
import { basque, Basque } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Basque language
 */
export interface IEu extends ILocale {
  language: Basque;
}

/**
 * The locale variable for the Basque language
 */
export const eu: IEu = {
  language: basque,
};

Object.freeze(eu);

export default eu;

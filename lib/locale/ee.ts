import { IImmutable as ILocale } from '@lib/ILocale';
import { ewe, Ewe } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Ewe language
 */
export interface IEe extends ILocale {
  language: Ewe;
}

/**
 * The locale variable for the Ewe language
 */
export const ee: IEe = {
  language: ewe,
};

Object.freeze(ee);

export default ee;

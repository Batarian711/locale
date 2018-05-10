import { IImmutable as ILocale } from '@lib/ILocale';
import { northernSami, NorthernSami } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Northern Sami language
 */
export interface ISe extends ILocale {
  language: NorthernSami;
}

/**
 * The locale variable for the Northern Sami language
 */
export const se: ISe = {
  language: northernSami,
};

Object.freeze(se);

export default se;

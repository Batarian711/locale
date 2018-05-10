import { IImmutable as ILocale } from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { telugu, Telugu } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Telugu language spoken in India
 */
export interface ITeIn extends ILocale {
  language: Telugu;
  region: India;
}

/**
 * The locale variable for the Telugu language spoken in India
 */
export const teIN: ITeIn = {
  language: telugu,
  region: india,
};

Object.freeze(teIN);

export default teIN;

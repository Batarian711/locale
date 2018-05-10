import { IImmutable as ILocale } from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { malayalam, Malayalam } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Malayalam language spoken in India
 */
export interface IMlIn extends ILocale {
  language: Malayalam;
  region: India;
}

/**
 * The locale variable for the Malayalam language spoken in India
 */
export const mlIN: IMlIn = {
  language: malayalam,
  region: india,
};

Object.freeze(mlIN);

export default mlIN;

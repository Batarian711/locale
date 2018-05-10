import { IImmutable as ILocale } from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { hindi, Hindi } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Hindi language spoken in India
 */
export interface IHiIn extends ILocale {
  language: Hindi;
  region: India;
}

/**
 * The locale variable for the Hindi language spoken in India
 */
export const hiIN: IHiIn = {
  language: hindi,
  region: india,
};

Object.freeze(hiIN);

export default hiIN;

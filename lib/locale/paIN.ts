import ILocale from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { punjabi, Punjabi } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Punjabi language spoken in India
 */
export interface IPaIn extends ILocale {
  language: Punjabi;
  region: India;
}

/**
 * The locale variable for the Punjabi language spoken in India
 */
export const paIN: IPaIn = {
  language: punjabi,
  region: india
};

export default paIN;

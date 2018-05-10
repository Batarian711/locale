import { IImmutable as ILocale } from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { punjabi, Punjabi } from '@lib/locale/Iso639/Part1';
import { gurmukhi, Gurmukhi } from '@lib/locale/Script';

/**
 * The locale interface for the Punjabi language spoken in India using the Gurmukhi script
 */
export interface IPaGuruIn extends ILocale {
  language: Punjabi;
  region: India;
  script: Gurmukhi;
}

/**
 * The locale variable for the Punjabi language spoken in India using the Gurmukhi script
 */
export const paGuruIN: IPaGuruIn = {
  language: punjabi,
  region: india,
  script: gurmukhi,
};

Object.freeze(paGuruIN);

export default paGuruIN;

import ILocale from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { oriya, Oriya } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Oriya language spoken in India
 */
export interface IOrIn extends ILocale {
  language: Oriya;
  region: India;
}

/**
 * The locale variable for the Oriya language spoken in India
 */
export const orIN: IOrIn = {
  language: oriya,
  region: india
};

export default orIN;

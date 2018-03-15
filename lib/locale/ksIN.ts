import ILocale from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { kashmiri, Kashmiri } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kashmiri language spoken in India
 */
export interface IKsIn extends ILocale {
  language: Kashmiri;
  region: India;
}

/**
 * The locale variable for the Kashmiri language spoken in India
 */
export const ksIN: IKsIn = {
  language: kashmiri,
  region: india
};

export default ksIN;

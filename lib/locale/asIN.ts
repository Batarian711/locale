import ILocale from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { assamese, Assamese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Assamese language spoken in India
 */
export interface IAsIn extends ILocale {
  language: Assamese;
  region: India;
}

/**
 * The locale variable for the Assamese language spoken in India
 */
export const asIN: IAsIn = {
  language: assamese,
  region: india
};

export default asIN;

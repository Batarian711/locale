import { IImmutable as ILocale } from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { urdu, Urdu } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Urdu language spoken in India
 */
export interface IUrIn extends ILocale {
  language: Urdu;
  region: India;
}

/**
 * The locale variable for the Urdu language spoken in India
 */
export const urIN: IUrIn = {
  language: urdu,
  region: india,
};

export default urIN;

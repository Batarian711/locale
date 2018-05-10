import { IImmutable as ILocale } from '@lib/ILocale';
import { southAfrica, SouthAfrica } from '@lib/locale/Iso3166/Part1/Alpha2';
import { afrikaans, Afrikaans } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Afrikaans language spoken in South Africa
 */
export interface IAfZa extends ILocale {
  language: Afrikaans;
  region: SouthAfrica;
}

/**
 * The locale variable for the Afrikaans language spoken in South Africa
 */
export const afZA: IAfZa = {
  language: afrikaans,
  region: southAfrica,
};

export default afZA;

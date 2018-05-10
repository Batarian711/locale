import { IImmutable as ILocale } from '@lib/ILocale';
import { newCaledonia, NewCaledonia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in New Caledonia
 */
export interface IFrNc extends ILocale {
  language: French;
  region: NewCaledonia;
}

/**
 * The locale variable for the French language spoken in New Caledonia
 */
export const frNC: IFrNc = {
  language: french,
  region: newCaledonia,
};

Object.freeze(frNC);

export default frNC;

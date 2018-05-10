import { IImmutable as ILocale } from '@lib/ILocale';
import { gabon, Gabon } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Gabon
 */
export interface IFrGa extends ILocale {
  language: French;
  region: Gabon;
}

/**
 * The locale variable for the French language spoken in Gabon
 */
export const frGA: IFrGa = {
  language: french,
  region: gabon,
};

Object.freeze(frGA);

export default frGA;

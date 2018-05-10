import { IImmutable as ILocale } from '@lib/ILocale';
import { frenchPolynesia, FrenchPolynesia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in French Polynesia
 */
export interface IFrPf extends ILocale {
  language: French;
  region: FrenchPolynesia;
}

/**
 * The locale variable for the French language spoken in French Polynesia
 */
export const frPF: IFrPf = {
  language: french,
  region: frenchPolynesia,
};

Object.freeze(frPF);

export default frPF;

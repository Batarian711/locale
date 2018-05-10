import { IImmutable as ILocale } from '@lib/ILocale';
import { mauritius, Mauritius } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Mauritius
 */
export interface IFrMu extends ILocale {
  language: French;
  region: Mauritius;
}

/**
 * The locale variable for the French language spoken in Mauritius
 */
export const frMU: IFrMu = {
  language: french,
  region: mauritius,
};

Object.freeze(frMU);

export default frMU;

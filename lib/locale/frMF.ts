import { IImmutable as ILocale } from '@lib/ILocale';
import { saintMartin, SaintMartin } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Saint Martin
 */
export interface IFrMf extends ILocale {
  language: French;
  region: SaintMartin;
}

/**
 * The locale variable for the French language spoken in Saint Martin
 */
export const frMF: IFrMf = {
  language: french,
  region: saintMartin,
};

Object.freeze(frMF);

export default frMF;

import { IImmutable as ILocale } from '@lib/ILocale';
import { mali, Mali } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Mali
 */
export interface IFrMl extends ILocale {
  language: French;
  region: Mali;
}

/**
 * The locale variable for the French language spoken in Mali
 */
export const frML: IFrMl = {
  language: french,
  region: mali,
};

export default frML;

import { IImmutable as ILocale } from '@lib/ILocale';
import { coteDivoire, CoteDivoire } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Côte dIvoire
 */
export interface IFrCi extends ILocale {
  language: French;
  region: CoteDivoire;
}

/**
 * The locale variable for the French language spoken in Côte dIvoire
 */
export const frCI: IFrCi = {
  language: french,
  region: coteDivoire,
};

export default frCI;

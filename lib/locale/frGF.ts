import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { frenchGuiana, FrenchGuiana } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in French Guiana
 */
export interface IFrGf extends ILocale {
  language: French;
  region: FrenchGuiana;
}

/**
 * The locale variable for the French language spoken in French Guiana
 */
export const frGF: IFrGf = {
  language: french,
  region: frenchGuiana,
};

freeze(frGF);

export default frGF;

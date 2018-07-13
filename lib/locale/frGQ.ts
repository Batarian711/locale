import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { equatorialGuinea, EquatorialGuinea } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Equatorial Guinea
 */
export interface IFrGq extends ILocale {
  language: French;
  region: EquatorialGuinea;
}

/**
 * The locale variable for the French language spoken in Equatorial Guinea
 */
export const frGQ: IFrGq = {
  language: french,
  region: equatorialGuinea,
};

freeze(frGQ);

export default frGQ;

import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { guinea, Guinea } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Guinea
 */
export interface IFrGn extends ILocale {
  language: French;
  region: Guinea;
}

/**
 * The locale variable for the French language spoken in Guinea
 */
export const frGN: IFrGn = {
  language: french,
  region: guinea,
};

freeze(frGN);

export default frGN;

import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { tunisia, Tunisia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Tunisia
 */
export interface IFrTn extends ILocale {
  language: French;
  region: Tunisia;
}

/**
 * The locale variable for the French language spoken in Tunisia
 */
export const frTN: IFrTn = {
  language: french,
  region: tunisia,
};

freeze(frTN);

export default frTN;

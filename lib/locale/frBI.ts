import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { burundi, Burundi } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Burundi
 */
export interface IFrBi extends ILocale {
  language: French;
  region: Burundi;
}

/**
 * The locale variable for the French language spoken in Burundi
 */
export const frBI: IFrBi = {
  language: french,
  region: burundi,
};

freeze(frBI);

export default frBI;

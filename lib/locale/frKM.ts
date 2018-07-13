import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { comoros, Comoros } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Comoros
 */
export interface IFrKm extends ILocale {
  language: French;
  region: Comoros;
}

/**
 * The locale variable for the French language spoken in Comoros
 */
export const frKM: IFrKm = {
  language: french,
  region: comoros,
};

freeze(frKM);

export default frKM;

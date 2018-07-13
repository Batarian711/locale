import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { panama, Panama } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Panama
 */
export interface IEsPa extends ILocale {
  language: Spanish;
  region: Panama;
}

/**
 * The locale variable for the Spanish language spoken in Panama
 */
export const esPA: IEsPa = {
  language: spanish,
  region: panama,
};

freeze(esPA);

export default esPA;

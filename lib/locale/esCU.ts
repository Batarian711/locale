import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { cuba, Cuba } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Cuba
 */
export interface IEsCu extends ILocale {
  language: Spanish;
  region: Cuba;
}

/**
 * The locale variable for the Spanish language spoken in Cuba
 */
export const esCU: IEsCu = {
  language: spanish,
  region: cuba,
};

freeze(esCU);

export default esCU;

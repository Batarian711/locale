import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { russianFederation, RussianFederation } from '@lib/locale/Iso3166/Part1/Alpha2';
import { russian, Russian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Russian language spoken in Russian Federation
 */
export interface IRuRu extends ILocale {
  language: Russian;
  region: RussianFederation;
}

/**
 * The locale variable for the Russian language spoken in Russian Federation
 */
export const ruRU: IRuRu = {
  language: russian,
  region: russianFederation,
};

freeze(ruRU);

export default ruRU;

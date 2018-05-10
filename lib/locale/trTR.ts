import { IImmutable as ILocale } from '@lib/ILocale';
import { turkey, Turkey } from '@lib/locale/Iso3166/Part1/Alpha2';
import { turkish, Turkish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Turkish language spoken in Turkey
 */
export interface ITrTr extends ILocale {
  language: Turkish;
  region: Turkey;
}

/**
 * The locale variable for the Turkish language spoken in Turkey
 */
export const trTR: ITrTr = {
  language: turkish,
  region: turkey,
};

export default trTR;

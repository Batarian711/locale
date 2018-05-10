import { IImmutable as ILocale } from '@lib/ILocale';
import { cyprus, Cyprus } from '@lib/locale/Iso3166/Part1/Alpha2';
import { turkish, Turkish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Turkish language spoken in Cyprus
 */
export interface ITrCy extends ILocale {
  language: Turkish;
  region: Cyprus;
}

/**
 * The locale variable for the Turkish language spoken in Cyprus
 */
export const trCY: ITrCy = {
  language: turkish,
  region: cyprus,
};

Object.freeze(trCY);

export default trCY;

import ILocale from '@lib/ILocale';
import { saintKittsAndNevis, SaintKittsAndNevis } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Saint Kitts and Nevis
 */
export interface IEnKn extends ILocale {
  language: English;
  region: SaintKittsAndNevis;
}

/**
 * The locale variable for the English language spoken in Saint Kitts and Nevis
 */
export const enKN: IEnKn = {
  language: english,
  region: saintKittsAndNevis,
};

export default enKN;

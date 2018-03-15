import ILocale from '@lib/ILocale';
import { tonga, Tonga } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Tonga
 */
export interface IEnTo extends ILocale {
  language: English;
  region: Tonga;
}

/**
 * The locale variable for the English language spoken in Tonga
 */
export const enTO: IEnTo = {
  language: english,
  region: tonga
};

export default enTO;

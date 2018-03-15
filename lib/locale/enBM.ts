import ILocale from '@lib/ILocale';
import { bermuda, Bermuda } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Bermuda
 */
export interface IEnBm extends ILocale {
  language: English;
  region: Bermuda;
}

/**
 * The locale variable for the English language spoken in Bermuda
 */
export const enBM: IEnBm = {
  language: english,
  region: bermuda
};

export default enBM;
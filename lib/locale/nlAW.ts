import ILocale from '@lib/ILocale';
import { aruba, Aruba } from '@lib/locale/Iso3166/Part1/Alpha2';
import { dutch, Dutch } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Dutch language spoken in Aruba
 */
export interface INlAw extends ILocale {
  language: Dutch;
  region: Aruba;
}

/**
 * The locale variable for the Dutch language spoken in Aruba
 */
export const nlAW: INlAw = {
  language: dutch,
  region: aruba,
};

export default nlAW;

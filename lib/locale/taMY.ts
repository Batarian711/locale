import ILocale from '@lib/ILocale';
import { malaysia, Malaysia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { tamil, Tamil } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tamil language spoken in Malaysia
 */
export interface ITaMy extends ILocale {
  language: Tamil;
  region: Malaysia;
}

/**
 * The locale variable for the Tamil language spoken in Malaysia
 */
export const taMY: ITaMy = {
  language: tamil,
  region: malaysia
};

export default taMY;

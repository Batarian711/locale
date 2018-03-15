import ILocale from '@lib/ILocale';
import { portugal, Portugal } from '@lib/locale/Iso3166/Part1/Alpha2';
import { portuguese, Portuguese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Portuguese language spoken in Portugal
 */
export interface IPtPt extends ILocale {
  language: Portuguese;
  region: Portugal;
}

/**
 * The locale variable for the Portuguese language spoken in Portugal
 */
export const ptPT: IPtPt = {
  language: portuguese,
  region: portugal
};

export default ptPT;

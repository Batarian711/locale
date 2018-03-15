import ILocale from '@lib/ILocale';
import { sweden, Sweden } from '@lib/locale/Iso3166/Part1/Alpha2';
import { northernSami, NorthernSami } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Northern Sami language spoken in Sweden
 */
export interface ISeSe extends ILocale {
  language: NorthernSami;
  region: Sweden;
}

/**
 * The locale variable for the Northern Sami language spoken in Sweden
 */
export const seSE: ISeSe = {
  language: northernSami,
  region: sweden
};

export default seSE;

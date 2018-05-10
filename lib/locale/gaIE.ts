import { IImmutable as ILocale } from '@lib/ILocale';
import { ireland, Ireland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { irish, Irish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Irish language spoken in Ireland
 */
export interface IGaIe extends ILocale {
  language: Irish;
  region: Ireland;
}

/**
 * The locale variable for the Irish language spoken in Ireland
 */
export const gaIE: IGaIe = {
  language: irish,
  region: ireland,
};

export default gaIE;

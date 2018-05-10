import ILocale from '@lib/ILocale';
import { austria, Austria } from '@lib/locale/Iso3166/Part1/Alpha2';
import { german, German } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the German language spoken in Austria
 */
export interface IDeAt extends ILocale {
  language: German;
  region: Austria;
}

/**
 * The locale variable for the German language spoken in Austria
 */
export const deAT: IDeAt = {
  language: german,
  region: austria,
};

export default deAT;

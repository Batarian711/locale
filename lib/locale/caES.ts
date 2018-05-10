import { IImmutable as ILocale } from '@lib/ILocale';
import { spain, Spain } from '@lib/locale/Iso3166/Part1/Alpha2';
import { catalan, Catalan } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Catalan language spoken in Spain
 */
export interface ICaEs extends ILocale {
  language: Catalan;
  region: Spain;
}

/**
 * The locale variable for the Catalan language spoken in Spain
 */
export const caES: ICaEs = {
  language: catalan,
  region: spain,
};

export default caES;

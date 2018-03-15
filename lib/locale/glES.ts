import ILocale from '@lib/ILocale';
import { spain, Spain } from '@lib/locale/Iso3166/Part1/Alpha2';
import { galician, Galician } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Galician language spoken in Spain
 */
export interface IGlEs extends ILocale {
  language: Galician;
  region: Spain;
}

/**
 * The locale variable for the Galician language spoken in Spain
 */
export const glES: IGlEs = {
  language: galician,
  region: spain
};

export default glES;

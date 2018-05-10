import ILocale from '@lib/ILocale';
import { spain, Spain } from '@lib/locale/Iso3166/Part1/Alpha2';
import { basque, Basque } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Basque language spoken in Spain
 */
export interface IEuEs extends ILocale {
  language: Basque;
  region: Spain;
}

/**
 * The locale variable for the Basque language spoken in Spain
 */
export const euES: IEuEs = {
  language: basque,
  region: spain,
};

export default euES;

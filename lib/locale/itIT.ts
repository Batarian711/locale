import { IImmutable as ILocale } from '@lib/ILocale';
import { italy, Italy } from '@lib/locale/Iso3166/Part1/Alpha2';
import { italian, Italian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Italian language spoken in Italy
 */
export interface IItIt extends ILocale {
  language: Italian;
  region: Italy;
}

/**
 * The locale variable for the Italian language spoken in Italy
 */
export const itIT: IItIt = {
  language: italian,
  region: italy,
};

export default itIT;

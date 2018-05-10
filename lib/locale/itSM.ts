import { IImmutable as ILocale } from '@lib/ILocale';
import { sanMarino, SanMarino } from '@lib/locale/Iso3166/Part1/Alpha2';
import { italian, Italian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Italian language spoken in San Marino
 */
export interface IItSm extends ILocale {
  language: Italian;
  region: SanMarino;
}

/**
 * The locale variable for the Italian language spoken in San Marino
 */
export const itSM: IItSm = {
  language: italian,
  region: sanMarino,
};

Object.freeze(itSM);

export default itSM;

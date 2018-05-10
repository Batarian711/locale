import { IImmutable as ILocale } from '@lib/ILocale';
import { switzerland, Switzerland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { italian, Italian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Italian language spoken in Switzerland
 */
export interface IItCh extends ILocale {
  language: Italian;
  region: Switzerland;
}

/**
 * The locale variable for the Italian language spoken in Switzerland
 */
export const itCH: IItCh = {
  language: italian,
  region: switzerland,
};

Object.freeze(itCH);

export default itCH;

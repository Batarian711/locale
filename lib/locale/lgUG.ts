import { IImmutable as ILocale } from '@lib/ILocale';
import { uganda, Uganda } from '@lib/locale/Iso3166/Part1/Alpha2';
import { ganda, Ganda } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Ganda language spoken in Uganda
 */
export interface ILgUg extends ILocale {
  language: Ganda;
  region: Uganda;
}

/**
 * The locale variable for the Ganda language spoken in Uganda
 */
export const lgUG: ILgUg = {
  language: ganda,
  region: uganda,
};

export default lgUG;

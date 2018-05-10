import { IImmutable as ILocale } from '@lib/ILocale';
import { singapore, Singapore } from '@lib/locale/Iso3166/Part1/Alpha2';
import { tamil, Tamil } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tamil language spoken in Singapore
 */
export interface ITaSg extends ILocale {
  language: Tamil;
  region: Singapore;
}

/**
 * The locale variable for the Tamil language spoken in Singapore
 */
export const taSG: ITaSg = {
  language: tamil,
  region: singapore,
};

Object.freeze(taSG);

export default taSG;

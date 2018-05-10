import { IImmutable as ILocale } from '@lib/ILocale';
import { ethiopia, Ethiopia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { tigrinya, Tigrinya } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tigrinya language spoken in Ethiopia
 */
export interface ITiEt extends ILocale {
  language: Tigrinya;
  region: Ethiopia;
}

/**
 * The locale variable for the Tigrinya language spoken in Ethiopia
 */
export const tiET: ITiEt = {
  language: tigrinya,
  region: ethiopia,
};

Object.freeze(tiET);

export default tiET;

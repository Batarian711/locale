import { IImmutable as ILocale } from '@lib/ILocale';
import { ethiopia, Ethiopia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { somali, Somali } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Somali language spoken in Ethiopia
 */
export interface ISoEt extends ILocale {
  language: Somali;
  region: Ethiopia;
}

/**
 * The locale variable for the Somali language spoken in Ethiopia
 */
export const soET: ISoEt = {
  language: somali,
  region: ethiopia,
};

Object.freeze(soET);

export default soET;

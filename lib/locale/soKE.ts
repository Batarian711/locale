import { IImmutable as ILocale } from '@lib/ILocale';
import { kenya, Kenya } from '@lib/locale/Iso3166/Part1/Alpha2';
import { somali, Somali } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Somali language spoken in Kenya
 */
export interface ISoKe extends ILocale {
  language: Somali;
  region: Kenya;
}

/**
 * The locale variable for the Somali language spoken in Kenya
 */
export const soKE: ISoKe = {
  language: somali,
  region: kenya,
};

export default soKE;

import { IImmutable as ILocale } from '@lib/ILocale';
import { somalia, Somalia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { somali, Somali } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Somali language spoken in Somalia
 */
export interface ISoSo extends ILocale {
  language: Somali;
  region: Somalia;
}

/**
 * The locale variable for the Somali language spoken in Somalia
 */
export const soSO: ISoSo = {
  language: somali,
  region: somalia,
};

Object.freeze(soSO);

export default soSO;

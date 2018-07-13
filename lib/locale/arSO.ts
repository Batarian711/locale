import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { somalia, Somalia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Somalia
 */
export interface IArSo extends ILocale {
  language: Arabic;
  region: Somalia;
}

/**
 * The locale variable for the Arabic language spoken in Somalia
 */
export const arSO: IArSo = {
  language: arabic,
  region: somalia,
};

freeze(arSO);

export default arSO;

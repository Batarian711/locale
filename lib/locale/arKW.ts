import { IImmutable as ILocale } from '@lib/ILocale';
import { kuwait, Kuwait } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Kuwait
 */
export interface IArKw extends ILocale {
  language: Arabic;
  region: Kuwait;
}

/**
 * The locale variable for the Arabic language spoken in Kuwait
 */
export const arKW: IArKw = {
  language: arabic,
  region: kuwait,
};

export default arKW;

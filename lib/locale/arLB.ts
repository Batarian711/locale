import { IImmutable as ILocale } from '@lib/ILocale';
import { lebanon, Lebanon } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Lebanon
 */
export interface IArLb extends ILocale {
  language: Arabic;
  region: Lebanon;
}

/**
 * The locale variable for the Arabic language spoken in Lebanon
 */
export const arLB: IArLb = {
  language: arabic,
  region: lebanon,
};

export default arLB;

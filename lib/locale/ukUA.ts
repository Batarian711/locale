import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { ukraine, Ukraine } from '@lib/locale/Iso3166/Part1/Alpha2';
import { ukrainian, Ukrainian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Ukrainian language spoken in Ukraine
 */
export interface IUkUa extends ILocale {
  language: Ukrainian;
  region: Ukraine;
}

/**
 * The locale variable for the Ukrainian language spoken in Ukraine
 */
export const ukUA: IUkUa = {
  language: ukrainian,
  region: ukraine,
};

freeze(ukUA);

export default ukUA;

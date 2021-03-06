import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { belize, Belize } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Belize
 */
export interface IEnBz extends ILocale {
  language: English;
  region: Belize;
}

/**
 * The locale variable for the English language spoken in Belize
 */
export const enBZ: IEnBz = {
  language: english,
  region: belize,
};

freeze(enBZ);

export default enBZ;

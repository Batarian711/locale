import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { nigeria, Nigeria } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Nigeria
 */
export interface IEnNg extends ILocale {
  language: English;
  region: Nigeria;
}

/**
 * The locale variable for the English language spoken in Nigeria
 */
export const enNG: IEnNg = {
  language: english,
  region: nigeria,
};

freeze(enNG);

export default enNG;

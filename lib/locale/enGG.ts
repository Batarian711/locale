import { IImmutable as ILocale } from '@lib/ILocale';
import { guernsey, Guernsey } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Guernsey
 */
export interface IEnGg extends ILocale {
  language: English;
  region: Guernsey;
}

/**
 * The locale variable for the English language spoken in Guernsey
 */
export const enGG: IEnGg = {
  language: english,
  region: guernsey,
};

Object.freeze(enGG);

export default enGG;

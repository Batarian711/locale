import { IImmutable as ILocale } from '@lib/ILocale';
import { ghana, Ghana } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Ghana
 */
export interface IEnGh extends ILocale {
  language: English;
  region: Ghana;
}

/**
 * The locale variable for the English language spoken in Ghana
 */
export const enGH: IEnGh = {
  language: english,
  region: ghana,
};

Object.freeze(enGH);

export default enGH;

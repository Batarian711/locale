import { IImmutable as ILocale } from '@lib/ILocale';
import { malaysia, Malaysia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Malaysia
 */
export interface IEnMy extends ILocale {
  language: English;
  region: Malaysia;
}

/**
 * The locale variable for the English language spoken in Malaysia
 */
export const enMY: IEnMy = {
  language: english,
  region: malaysia,
};

Object.freeze(enMY);

export default enMY;

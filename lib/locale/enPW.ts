import ILocale from '@lib/ILocale';
import { palau, Palau } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Palau
 */
export interface IEnPw extends ILocale {
  language: English;
  region: Palau;
}

/**
 * The locale variable for the English language spoken in Palau
 */
export const enPW: IEnPw = {
  language: english,
  region: palau,
};

export default enPW;

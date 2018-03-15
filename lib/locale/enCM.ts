import ILocale from '@lib/ILocale';
import { cameroon, Cameroon } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Cameroon
 */
export interface IEnCm extends ILocale {
  language: English;
  region: Cameroon;
}

/**
 * The locale variable for the English language spoken in Cameroon
 */
export const enCM: IEnCm = {
  language: english,
  region: cameroon
};

export default enCM;

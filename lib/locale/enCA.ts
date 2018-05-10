import ILocale from '@lib/ILocale';
import { canada, Canada } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Canada
 */
export interface IEnCa extends ILocale {
  language: English;
  region: Canada;
}

/**
 * The locale variable for the English language spoken in Canada
 */
export const enCA: IEnCa = {
  language: english,
  region: canada,
};

export default enCA;

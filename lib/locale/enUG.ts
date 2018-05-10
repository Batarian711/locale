import ILocale from '@lib/ILocale';
import { uganda, Uganda } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Uganda
 */
export interface IEnUg extends ILocale {
  language: English;
  region: Uganda;
}

/**
 * The locale variable for the English language spoken in Uganda
 */
export const enUG: IEnUg = {
  language: english,
  region: uganda,
};

export default enUG;

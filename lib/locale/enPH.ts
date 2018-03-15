import ILocale from '@lib/ILocale';
import { philippines, Philippines } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Philippines
 */
export interface IEnPh extends ILocale {
  language: English;
  region: Philippines;
}

/**
 * The locale variable for the English language spoken in Philippines
 */
export const enPH: IEnPh = {
  language: english,
  region: philippines
};

export default enPH;

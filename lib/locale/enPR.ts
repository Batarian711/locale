import ILocale from '@lib/ILocale';
import { puertoRico, PuertoRico } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Puerto Rico
 */
export interface IEnPr extends ILocale {
  language: English;
  region: PuertoRico;
}

/**
 * The locale variable for the English language spoken in Puerto Rico
 */
export const enPR: IEnPr = {
  language: english,
  region: puertoRico,
};

export default enPR;

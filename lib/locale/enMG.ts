import ILocale from '@lib/ILocale';
import { madagascar, Madagascar } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Madagascar
 */
export interface IEnMg extends ILocale {
  language: English;
  region: Madagascar;
}

/**
 * The locale variable for the English language spoken in Madagascar
 */
export const enMG: IEnMg = {
  language: english,
  region: madagascar
};

export default enMG;

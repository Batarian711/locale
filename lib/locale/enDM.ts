import ILocale from '@lib/ILocale';
import { dominica, Dominica } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Dominica
 */
export interface IEnDm extends ILocale {
  language: English;
  region: Dominica;
}

/**
 * The locale variable for the English language spoken in Dominica
 */
export const enDM: IEnDm = {
  language: english,
  region: dominica
};

export default enDM;

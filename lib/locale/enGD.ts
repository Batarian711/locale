import ILocale from '@lib/ILocale';
import { grenada, Grenada } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Grenada
 */
export interface IEnGd extends ILocale {
  language: English;
  region: Grenada;
}

/**
 * The locale variable for the English language spoken in Grenada
 */
export const enGD: IEnGd = {
  language: english,
  region: grenada,
};

export default enGD;

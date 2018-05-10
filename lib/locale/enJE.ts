import ILocale from '@lib/ILocale';
import { jersey, Jersey } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Jersey
 */
export interface IEnJe extends ILocale {
  language: English;
  region: Jersey;
}

/**
 * The locale variable for the English language spoken in Jersey
 */
export const enJE: IEnJe = {
  language: english,
  region: jersey,
};

export default enJE;

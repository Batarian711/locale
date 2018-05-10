import ILocale from '@lib/ILocale';
import { isleOfMan, IsleOfMan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Isle of Man
 */
export interface IEnIm extends ILocale {
  language: English;
  region: IsleOfMan;
}

/**
 * The locale variable for the English language spoken in Isle of Man
 */
export const enIM: IEnIm = {
  language: english,
  region: isleOfMan,
};

export default enIM;

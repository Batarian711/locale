import ILocale from '@lib/ILocale';
import { belgium, Belgium } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Belgium
 */
export interface IEnBe extends ILocale {
  language: English;
  region: Belgium;
}

/**
 * The locale variable for the English language spoken in Belgium
 */
export const enBE: IEnBe = {
  language: english,
  region: belgium,
};

export default enBE;

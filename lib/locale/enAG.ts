import ILocale from '@lib/ILocale';
import { antiguaAndBarbuda, AntiguaAndBarbuda } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Antigua and Barbuda
 */
export interface IEnAg extends ILocale {
  language: English;
  region: AntiguaAndBarbuda;
}

/**
 * The locale variable for the English language spoken in Antigua and Barbuda
 */
export const enAG: IEnAg = {
  language: english,
  region: antiguaAndBarbuda
};

export default enAG;

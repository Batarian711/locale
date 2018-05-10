import ILocale from '@lib/ILocale';
import { zimbabwe, Zimbabwe } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Zimbabwe
 */
export interface IEnZw extends ILocale {
  language: English;
  region: Zimbabwe;
}

/**
 * The locale variable for the English language spoken in Zimbabwe
 */
export const enZW: IEnZw = {
  language: english,
  region: zimbabwe,
};

export default enZW;

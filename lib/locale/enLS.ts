import ILocale from '@lib/ILocale';
import { lesotho, Lesotho } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Lesotho
 */
export interface IEnLs extends ILocale {
  language: English;
  region: Lesotho;
}

/**
 * The locale variable for the English language spoken in Lesotho
 */
export const enLS: IEnLs = {
  language: english,
  region: lesotho
};

export default enLS;

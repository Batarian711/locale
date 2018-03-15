import ILocale from '@lib/ILocale';
import { sudan, Sudan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Sudan
 */
export interface IEnSd extends ILocale {
  language: English;
  region: Sudan;
}

/**
 * The locale variable for the English language spoken in Sudan
 */
export const enSD: IEnSd = {
  language: english,
  region: sudan
};

export default enSD;

import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { jamaica, Jamaica } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Jamaica
 */
export interface IEnJm extends ILocale {
  language: English;
  region: Jamaica;
}

/**
 * The locale variable for the English language spoken in Jamaica
 */
export const enJM: IEnJm = {
  language: english,
  region: jamaica,
};

freeze(enJM);

export default enJM;

import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { tokelau, Tokelau } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Tokelau
 */
export interface IEnTk extends ILocale {
  language: English;
  region: Tokelau;
}

/**
 * The locale variable for the English language spoken in Tokelau
 */
export const enTK: IEnTk = {
  language: english,
  region: tokelau,
};

freeze(enTK);

export default enTK;

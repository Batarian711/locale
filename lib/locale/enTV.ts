import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { tuvalu, Tuvalu } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Tuvalu
 */
export interface IEnTv extends ILocale {
  language: English;
  region: Tuvalu;
}

/**
 * The locale variable for the English language spoken in Tuvalu
 */
export const enTV: IEnTv = {
  language: english,
  region: tuvalu,
};

freeze(enTV);

export default enTV;

import ILocale from '@lib/ILocale';
import { pitcairn, Pitcairn } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Pitcairn
 */
export interface IEnPn extends ILocale {
  language: English;
  region: Pitcairn;
}

/**
 * The locale variable for the English language spoken in Pitcairn
 */
export const enPN: IEnPn = {
  language: english,
  region: pitcairn,
};

export default enPN;

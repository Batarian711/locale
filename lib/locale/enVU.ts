import { IImmutable as ILocale } from '@lib/ILocale';
import { vanuatu, Vanuatu } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Vanuatu
 */
export interface IEnVu extends ILocale {
  language: English;
  region: Vanuatu;
}

/**
 * The locale variable for the English language spoken in Vanuatu
 */
export const enVU: IEnVu = {
  language: english,
  region: vanuatu,
};

Object.freeze(enVU);

export default enVU;

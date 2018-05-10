import { IImmutable as ILocale } from '@lib/ILocale';
import { namibia, Namibia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Namibia
 */
export interface IEnNa extends ILocale {
  language: English;
  region: Namibia;
}

/**
 * The locale variable for the English language spoken in Namibia
 */
export const enNA: IEnNa = {
  language: english,
  region: namibia,
};

Object.freeze(enNA);

export default enNA;

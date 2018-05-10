import { IImmutable as ILocale } from '@lib/ILocale';
import { trinidadAndTobago, TrinidadAndTobago } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Trinidad and Tobago
 */
export interface IEnTt extends ILocale {
  language: English;
  region: TrinidadAndTobago;
}

/**
 * The locale variable for the English language spoken in Trinidad and Tobago
 */
export const enTT: IEnTt = {
  language: english,
  region: trinidadAndTobago,
};

export default enTT;

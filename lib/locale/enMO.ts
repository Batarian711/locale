import { IImmutable as ILocale } from '@lib/ILocale';
import { macao, Macao } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Macao
 */
export interface IEnMo extends ILocale {
  language: English;
  region: Macao;
}

/**
 * The locale variable for the English language spoken in Macao
 */
export const enMO: IEnMo = {
  language: english,
  region: macao,
};

Object.freeze(enMO);

export default enMO;

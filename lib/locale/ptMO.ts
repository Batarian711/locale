import ILocale from '@lib/ILocale';
import { macao, Macao } from '@lib/locale/Iso3166/Part1/Alpha2';
import { portuguese, Portuguese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Portuguese language spoken in Macao
 */
export interface IPtMo extends ILocale {
  language: Portuguese;
  region: Macao;
}

/**
 * The locale variable for the Portuguese language spoken in Macao
 */
export const ptMO: IPtMo = {
  language: portuguese,
  region: macao,
};

export default ptMO;

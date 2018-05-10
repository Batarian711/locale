import ILocale from '@lib/ILocale';
import { curacao, Curacao } from '@lib/locale/Iso3166/Part1/Alpha2';
import { dutch, Dutch } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Dutch language spoken in Curaçao
 */
export interface INlCw extends ILocale {
  language: Dutch;
  region: Curacao;
}

/**
 * The locale variable for the Dutch language spoken in Curaçao
 */
export const nlCW: INlCw = {
  language: dutch,
  region: curacao,
};

export default nlCW;

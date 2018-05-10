import ILocale from '@lib/ILocale';
import { barbados, Barbados } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Barbados
 */
export interface IEnBb extends ILocale {
  language: English;
  region: Barbados;
}

/**
 * The locale variable for the English language spoken in Barbados
 */
export const enBB: IEnBb = {
  language: english,
  region: barbados,
};

export default enBB;

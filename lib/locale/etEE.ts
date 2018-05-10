import ILocale from '@lib/ILocale';
import { estonia, Estonia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { estonian, Estonian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Estonian language spoken in Estonia
 */
export interface IEtEe extends ILocale {
  language: Estonian;
  region: Estonia;
}

/**
 * The locale variable for the Estonian language spoken in Estonia
 */
export const etEE: IEtEe = {
  language: estonian,
  region: estonia,
};

export default etEE;

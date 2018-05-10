import ILocale from '@lib/ILocale';
import { senegal, Senegal } from '@lib/locale/Iso3166/Part1/Alpha2';
import { fula, Fula } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Fula language spoken in Senegal
 */
export interface IFfSn extends ILocale {
  language: Fula;
  region: Senegal;
}

/**
 * The locale variable for the Fula language spoken in Senegal
 */
export const ffSN: IFfSn = {
  language: fula,
  region: senegal,
};

export default ffSN;

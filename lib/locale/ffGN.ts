import ILocale from '@lib/ILocale';
import { guinea, Guinea } from '@lib/locale/Iso3166/Part1/Alpha2';
import { fula, Fula } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Fula language spoken in Guinea
 */
export interface IFfGn extends ILocale {
  language: Fula;
  region: Guinea;
}

/**
 * The locale variable for the Fula language spoken in Guinea
 */
export const ffGN: IFfGn = {
  language: fula,
  region: guinea
};

export default ffGN;

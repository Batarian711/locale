import ILocale from '@lib/ILocale';
import { iran, Iran } from '@lib/locale/Iso3166/Part1/Alpha2';
import { persian, Persian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Persian language spoken in Iran
 */
export interface IFaIr extends ILocale {
  language: Persian;
  region: Iran;
}

/**
 * The locale variable for the Persian language spoken in Iran
 */
export const faIR: IFaIr = {
  language: persian,
  region: iran
};

export default faIR;

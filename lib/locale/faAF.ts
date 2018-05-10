import { IImmutable as ILocale } from '@lib/ILocale';
import { afghanistan, Afghanistan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { persian, Persian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Persian language spoken in Afghanistan
 */
export interface IFaAf extends ILocale {
  language: Persian;
  region: Afghanistan;
}

/**
 * The locale variable for the Persian language spoken in Afghanistan
 */
export const faAF: IFaAf = {
  language: persian,
  region: afghanistan,
};

export default faAF;

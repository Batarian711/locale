import ILocale from '@lib/ILocale';
import { tonga, Tonga } from '@lib/locale/Iso3166/Part1/Alpha2';
import { tongan, Tongan } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tongan language spoken in Tonga
 */
export interface IToTo extends ILocale {
  language: Tongan;
  region: Tonga;
}

/**
 * The locale variable for the Tongan language spoken in Tonga
 */
export const toTO: IToTo = {
  language: tongan,
  region: tonga
};

export default toTO;

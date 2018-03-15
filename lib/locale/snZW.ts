import ILocale from '@lib/ILocale';
import { zimbabwe, Zimbabwe } from '@lib/locale/Iso3166/Part1/Alpha2';
import { shona, Shona } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Shona language spoken in Zimbabwe
 */
export interface ISnZw extends ILocale {
  language: Shona;
  region: Zimbabwe;
}

/**
 * The locale variable for the Shona language spoken in Zimbabwe
 */
export const snZW: ISnZw = {
  language: shona,
  region: zimbabwe
};

export default snZW;

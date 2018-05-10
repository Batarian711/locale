import { IImmutable as ILocale } from '@lib/ILocale';
import { philippines, Philippines } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Philippines
 */
export interface IEsPh extends ILocale {
  language: Spanish;
  region: Philippines;
}

/**
 * The locale variable for the Spanish language spoken in Philippines
 */
export const esPH: IEsPh = {
  language: spanish,
  region: philippines,
};

export default esPH;

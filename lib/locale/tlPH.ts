import { IImmutable as ILocale } from '@lib/ILocale';
import { philippines, Philippines } from '@lib/locale/Iso3166/Part1/Alpha2';
import { tagalog, Tagalog } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tagalog language spoken in Philippines
 */
export interface ITlPh extends ILocale {
  language: Tagalog;
  region: Philippines;
}

/**
 * The locale variable for the Tagalog language spoken in Philippines
 */
export const tlPH: ITlPh = {
  language: tagalog,
  region: philippines,
};

export default tlPH;

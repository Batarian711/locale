import ILocale from '@lib/ILocale';
import { sriLanka, SriLanka } from '@lib/locale/Iso3166/Part1/Alpha2';
import { tamil, Tamil } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tamil language spoken in Sri Lanka
 */
export interface ITaLk extends ILocale {
  language: Tamil;
  region: SriLanka;
}

/**
 * The locale variable for the Tamil language spoken in Sri Lanka
 */
export const taLK: ITaLk = {
  language: tamil,
  region: sriLanka,
};

export default taLK;

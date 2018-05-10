import { IImmutable as ILocale } from '@lib/ILocale';
import { mongolia, Mongolia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { mongolian, Mongolian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Mongolian language spoken in Mongolia
 */
export interface IMnMn extends ILocale {
  language: Mongolian;
  region: Mongolia;
}

/**
 * The locale variable for the Mongolian language spoken in Mongolia
 */
export const mnMN: IMnMn = {
  language: mongolian,
  region: mongolia,
};

export default mnMN;

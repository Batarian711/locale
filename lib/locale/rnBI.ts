import { IImmutable as ILocale } from '@lib/ILocale';
import { burundi, Burundi } from '@lib/locale/Iso3166/Part1/Alpha2';
import { kirundi, Kirundi } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kirundi language spoken in Burundi
 */
export interface IRnBi extends ILocale {
  language: Kirundi;
  region: Burundi;
}

/**
 * The locale variable for the Kirundi language spoken in Burundi
 */
export const rnBI: IRnBi = {
  language: kirundi,
  region: burundi,
};

Object.freeze(rnBI);

export default rnBI;

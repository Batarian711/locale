import ILocale from '@lib/ILocale';
import { ecuador, Ecuador } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Ecuador
 */
export interface IEsEc extends ILocale {
  language: Spanish;
  region: Ecuador;
}

/**
 * The locale variable for the Spanish language spoken in Ecuador
 */
export const esEC: IEsEc = {
  language: spanish,
  region: ecuador,
};

export default esEC;

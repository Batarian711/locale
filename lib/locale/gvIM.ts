import ILocale from '@lib/ILocale';
import { isleOfMan, IsleOfMan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { manx, Manx } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Manx language spoken in Isle of Man
 */
export interface IGvIm extends ILocale {
  language: Manx;
  region: IsleOfMan;
}

/**
 * The locale variable for the Manx language spoken in Isle of Man
 */
export const gvIM: IGvIm = {
  language: manx,
  region: isleOfMan,
};

export default gvIM;

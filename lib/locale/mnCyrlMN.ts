import ILocale from '@lib/ILocale';
import { mongolia, Mongolia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { mongolian, Mongolian } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Mongolian language spoken in Mongolia using the Cyrillic script
 */
export interface IMnCyrlMn extends ILocale {
  language: Mongolian;
  region: Mongolia;
  script: Cyrillic;
}

/**
 * The locale variable for the Mongolian language spoken in Mongolia using the Cyrillic script
 */
export const mnCyrlMN: IMnCyrlMn = {
  language: mongolian,
  region: mongolia,
  script: cyrillic,
};

export default mnCyrlMN;

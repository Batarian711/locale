import ILocale from '@lib/ILocale';
import { uzbekistan, Uzbekistan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { uzbek, Uzbek } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Uzbek language spoken in Uzbekistan using the Cyrillic script
 */
export interface IUzCyrlUz extends ILocale {
  language: Uzbek;
  region: Uzbekistan;
  script: Cyrillic;
}

/**
 * The locale variable for the Uzbek language spoken in Uzbekistan using the Cyrillic script
 */
export const uzCyrlUZ: IUzCyrlUz = {
  language: uzbek,
  region: uzbekistan,
  script: cyrillic
};

export default uzCyrlUZ;

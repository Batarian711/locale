import ILocale from '@lib/ILocale';
import { montenegro, Montenegro } from '@lib/locale/Iso3166/Part1/Alpha2';
import { serbian, Serbian } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Serbian language spoken in Montenegro using the Cyrillic script
 */
export interface ISrCyrlMe extends ILocale {
  language: Serbian;
  region: Montenegro;
  script: Cyrillic;
}

/**
 * The locale variable for the Serbian language spoken in Montenegro using the Cyrillic script
 */
export const srCyrlME: ISrCyrlMe = {
  language: serbian,
  region: montenegro,
  script: cyrillic
};

export default srCyrlME;

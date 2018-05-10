import ILocale from '@lib/ILocale';
import { serbia, Serbia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { serbian, Serbian } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Serbian language spoken in Serbia using the Cyrillic script
 */
export interface ISrCyrlRs extends ILocale {
  language: Serbian;
  region: Serbia;
  script: Cyrillic;
}

/**
 * The locale variable for the Serbian language spoken in Serbia using the Cyrillic script
 */
export const srCyrlRS: ISrCyrlRs = {
  language: serbian,
  region: serbia,
  script: cyrillic,
};

export default srCyrlRS;

import { IImmutable as ILocale } from '@lib/ILocale';
import { azerbaijan, Azerbaijan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { azerbaijani, Azerbaijani } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Azerbaijani language spoken in Azerbaijan using the Cyrillic script
 */
export interface IAzCyrlAz extends ILocale {
  language: Azerbaijani;
  region: Azerbaijan;
  script: Cyrillic;
}

/**
 * The locale variable for the Azerbaijani language spoken in Azerbaijan using the Cyrillic script
 */
export const azCyrlAZ: IAzCyrlAz = {
  language: azerbaijani,
  region: azerbaijan,
  script: cyrillic,
};

Object.freeze(azCyrlAZ);

export default azCyrlAZ;

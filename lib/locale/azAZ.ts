import { IImmutable as ILocale } from '@lib/ILocale';
import { azerbaijan, Azerbaijan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { azerbaijani, Azerbaijani } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Azerbaijani language spoken in Azerbaijan
 */
export interface IAzAz extends ILocale {
  language: Azerbaijani;
  region: Azerbaijan;
}

/**
 * The locale variable for the Azerbaijani language spoken in Azerbaijan
 */
export const azAZ: IAzAz = {
  language: azerbaijani,
  region: azerbaijan,
};

Object.freeze(azAZ);

export default azAZ;

import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { malaysia, Malaysia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { malay, Malay } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Malay language spoken in Malaysia
 */
export interface IMsMy extends ILocale {
  language: Malay;
  region: Malaysia;
}

/**
 * The locale variable for the Malay language spoken in Malaysia
 */
export const msMY: IMsMy = {
  language: malay,
  region: malaysia,
};

freeze(msMY);

export default msMY;

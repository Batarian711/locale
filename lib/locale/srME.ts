import ILocale from '@lib/ILocale';
import { montenegro, Montenegro } from '@lib/locale/Iso3166/Part1/Alpha2';
import { serbian, Serbian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Serbian language spoken in Montenegro
 */
export interface ISrMe extends ILocale {
  language: Serbian;
  region: Montenegro;
}

/**
 * The locale variable for the Serbian language spoken in Montenegro
 */
export const srME: ISrMe = {
  language: serbian,
  region: montenegro,
};

export default srME;

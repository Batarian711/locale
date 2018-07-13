import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { serbia, Serbia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { serbian, Serbian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Serbian language spoken in Serbia
 */
export interface ISrRs extends ILocale {
  language: Serbian;
  region: Serbia;
}

/**
 * The locale variable for the Serbian language spoken in Serbia
 */
export const srRS: ISrRs = {
  language: serbian,
  region: serbia,
};

freeze(srRS);

export default srRS;

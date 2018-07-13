import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { suriname, Suriname } from '@lib/locale/Iso3166/Part1/Alpha2';
import { dutch, Dutch } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Dutch language spoken in Suriname
 */
export interface INlSr extends ILocale {
  language: Dutch;
  region: Suriname;
}

/**
 * The locale variable for the Dutch language spoken in Suriname
 */
export const nlSR: INlSr = {
  language: dutch,
  region: suriname,
};

freeze(nlSR);

export default nlSR;

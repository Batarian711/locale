import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { france, France } from '@lib/locale/Iso3166/Part1/Alpha2';
import { breton, Breton } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Breton language spoken in France
 */
export interface IBrFr extends ILocale {
  language: Breton;
  region: France;
}

/**
 * The locale variable for the Breton language spoken in France
 */
export const brFR: IBrFr = {
  language: breton,
  region: france,
};

freeze(brFR);

export default brFR;

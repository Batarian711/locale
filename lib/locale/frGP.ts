import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { guadeloupe, Guadeloupe } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Guadeloupe
 */
export interface IFrGp extends ILocale {
  language: French;
  region: Guadeloupe;
}

/**
 * The locale variable for the French language spoken in Guadeloupe
 */
export const frGP: IFrGp = {
  language: french,
  region: guadeloupe,
};

freeze(frGP);

export default frGP;

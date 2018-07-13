import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { luxembourg, Luxembourg } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Luxembourg
 */
export interface IFrLu extends ILocale {
  language: French;
  region: Luxembourg;
}

/**
 * The locale variable for the French language spoken in Luxembourg
 */
export const frLU: IFrLu = {
  language: french,
  region: luxembourg,
};

freeze(frLU);

export default frLU;

import { IImmutable as ILocale } from '@lib/ILocale';
import { luxembourg, Luxembourg } from '@lib/locale/Iso3166/Part1/Alpha2';
import { german, German } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the German language spoken in Luxembourg
 */
export interface IDeLu extends ILocale {
  language: German;
  region: Luxembourg;
}

/**
 * The locale variable for the German language spoken in Luxembourg
 */
export const deLU: IDeLu = {
  language: german,
  region: luxembourg,
};

export default deLU;

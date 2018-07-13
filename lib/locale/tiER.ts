import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { eritrea, Eritrea } from '@lib/locale/Iso3166/Part1/Alpha2';
import { tigrinya, Tigrinya } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tigrinya language spoken in Eritrea
 */
export interface ITiEr extends ILocale {
  language: Tigrinya;
  region: Eritrea;
}

/**
 * The locale variable for the Tigrinya language spoken in Eritrea
 */
export const tiER: ITiEr = {
  language: tigrinya,
  region: eritrea,
};

freeze(tiER);

export default tiER;

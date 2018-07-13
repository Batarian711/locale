import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { ethiopia, Ethiopia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { amharic, Amharic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Amharic language spoken in Ethiopia
 */
export interface IAmEt extends ILocale {
  language: Amharic;
  region: Ethiopia;
}

/**
 * The locale variable for the Amharic language spoken in Ethiopia
 */
export const amET: IAmEt = {
  language: amharic,
  region: ethiopia,
};

freeze(amET);

export default amET;

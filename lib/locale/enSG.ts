import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { singapore, Singapore } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Singapore
 */
export interface IEnSg extends ILocale {
  language: English;
  region: Singapore;
}

/**
 * The locale variable for the English language spoken in Singapore
 */
export const enSG: IEnSg = {
  language: english,
  region: singapore,
};

freeze(enSG);

export default enSG;

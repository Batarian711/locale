import { IImmutable as ILocale } from '@lib/ILocale';
import { sierraLeone, SierraLeone } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Sierra Leone
 */
export interface IEnSl extends ILocale {
  language: English;
  region: SierraLeone;
}

/**
 * The locale variable for the English language spoken in Sierra Leone
 */
export const enSL: IEnSl = {
  language: english,
  region: sierraLeone,
};

Object.freeze(enSL);

export default enSL;

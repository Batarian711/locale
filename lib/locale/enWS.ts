import { IImmutable as ILocale } from '@lib/ILocale';
import { samoa, Samoa } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Samoa
 */
export interface IEnWs extends ILocale {
  language: English;
  region: Samoa;
}

/**
 * The locale variable for the English language spoken in Samoa
 */
export const enWS: IEnWs = {
  language: english,
  region: samoa,
};

export default enWS;

import { IImmutable as ILocale } from '@lib/ILocale';
import { zambia, Zambia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Zambia
 */
export interface IEnZm extends ILocale {
  language: English;
  region: Zambia;
}

/**
 * The locale variable for the English language spoken in Zambia
 */
export const enZM: IEnZm = {
  language: english,
  region: zambia,
};

export default enZM;

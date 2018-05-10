import ILocale from '@lib/ILocale';
import { hongKong, HongKong } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Hong Kong
 */
export interface IEnHk extends ILocale {
  language: English;
  region: HongKong;
}

/**
 * The locale variable for the English language spoken in Hong Kong
 */
export const enHK: IEnHk = {
  language: english,
  region: hongKong,
};

export default enHK;

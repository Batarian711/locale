import ILocale from '@lib/ILocale';
import { republicOfKorea, RepublicOfKorea } from '@lib/locale/Iso3166/Part1/Alpha2';
import { korean, Korean } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Korean language spoken in Republic of Korea
 */
export interface IKoKr extends ILocale {
  language: Korean;
  region: RepublicOfKorea;
}

/**
 * The locale variable for the Korean language spoken in Republic of Korea
 */
export const koKR: IKoKr = {
  language: korean,
  region: republicOfKorea,
};

export default koKR;

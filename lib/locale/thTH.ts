import { IImmutable as ILocale } from '@lib/ILocale';
import { thailand, Thailand } from '@lib/locale/Iso3166/Part1/Alpha2';
import { thai, Thai } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Thai language spoken in Thailand
 */
export interface IThTh extends ILocale {
  language: Thai;
  region: Thailand;
}

/**
 * The locale variable for the Thai language spoken in Thailand
 */
export const thTH: IThTh = {
  language: thai,
  region: thailand,
};

Object.freeze(thTH);

export default thTH;

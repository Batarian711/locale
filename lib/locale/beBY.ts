import ILocale from '@lib/ILocale';
import { belarus, Belarus } from '@lib/locale/Iso3166/Part1/Alpha2';
import { belarusian, Belarusian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Belarusian language spoken in Belarus
 */
export interface IBeBy extends ILocale {
  language: Belarusian;
  region: Belarus;
}

/**
 * The locale variable for the Belarusian language spoken in Belarus
 */
export const beBY: IBeBy = {
  language: belarusian,
  region: belarus,
};

export default beBY;

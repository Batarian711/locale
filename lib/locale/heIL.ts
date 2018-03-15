import ILocale from '@lib/ILocale';
import { israel, Israel } from '@lib/locale/Iso3166/Part1/Alpha2';
import { hebrew, Hebrew } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Hebrew language spoken in Israel
 */
export interface IHeIl extends ILocale {
  language: Hebrew;
  region: Israel;
}

/**
 * The locale variable for the Hebrew language spoken in Israel
 */
export const heIL: IHeIl = {
  language: hebrew,
  region: israel
};

export default heIL;

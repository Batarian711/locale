import ILocale from '@lib/ILocale';
import { sintMaarten, SintMaarten } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Sint Maarten
 */
export interface IEnSx extends ILocale {
  language: English;
  region: SintMaarten;
}

/**
 * The locale variable for the English language spoken in Sint Maarten
 */
export const enSX: IEnSx = {
  language: english,
  region: sintMaarten,
};

export default enSX;

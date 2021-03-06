import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { sintMaarten, SintMaarten } from '@lib/locale/Iso3166/Part1/Alpha2';
import { dutch, Dutch } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Dutch language spoken in Sint Maarten
 */
export interface INlSx extends ILocale {
  language: Dutch;
  region: SintMaarten;
}

/**
 * The locale variable for the Dutch language spoken in Sint Maarten
 */
export const nlSX: INlSx = {
  language: dutch,
  region: sintMaarten,
};

freeze(nlSX);

export default nlSX;

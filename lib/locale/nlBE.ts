import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { belgium, Belgium } from '@lib/locale/Iso3166/Part1/Alpha2';
import { dutch, Dutch } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Dutch language spoken in Belgium
 */
export interface INlBe extends ILocale {
  language: Dutch;
  region: Belgium;
}

/**
 * The locale variable for the Dutch language spoken in Belgium
 */
export const nlBE: INlBe = {
  language: dutch,
  region: belgium,
};

freeze(nlBE);

export default nlBE;

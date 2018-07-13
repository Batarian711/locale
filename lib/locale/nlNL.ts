import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { netherlands, Netherlands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { dutch, Dutch } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Dutch language spoken in Netherlands
 */
export interface INlNl extends ILocale {
  language: Dutch;
  region: Netherlands;
}

/**
 * The locale variable for the Dutch language spoken in Netherlands
 */
export const nlNL: INlNl = {
  language: dutch,
  region: netherlands,
};

freeze(nlNL);

export default nlNL;

import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { georgia, Georgia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { ossetian, Ossetian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Ossetian language spoken in Georgia
 */
export interface IOsGe extends ILocale {
  language: Ossetian;
  region: Georgia;
}

/**
 * The locale variable for the Ossetian language spoken in Georgia
 */
export const osGE: IOsGe = {
  language: ossetian,
  region: georgia,
};

freeze(osGE);

export default osGE;

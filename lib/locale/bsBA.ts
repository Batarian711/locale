import ILocale from '@lib/ILocale';
import { bosniaAndHerzegovina, BosniaAndHerzegovina } from '@lib/locale/Iso3166/Part1/Alpha2';
import { bosnian, Bosnian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Bosnian language spoken in Bosnia and Herzegovina
 */
export interface IBsBa extends ILocale {
  language: Bosnian;
  region: BosniaAndHerzegovina;
}

/**
 * The locale variable for the Bosnian language spoken in Bosnia and Herzegovina
 */
export const bsBA: IBsBa = {
  language: bosnian,
  region: bosniaAndHerzegovina
};

export default bsBA;

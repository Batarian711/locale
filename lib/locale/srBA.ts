import ILocale from '@lib/ILocale';
import { bosniaAndHerzegovina, BosniaAndHerzegovina } from '@lib/locale/Iso3166/Part1/Alpha2';
import { serbian, Serbian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Serbian language spoken in Bosnia and Herzegovina
 */
export interface ISrBa extends ILocale {
  language: Serbian;
  region: BosniaAndHerzegovina;
}

/**
 * The locale variable for the Serbian language spoken in Bosnia and Herzegovina
 */
export const srBA: ISrBa = {
  language: serbian,
  region: bosniaAndHerzegovina,
};

export default srBA;

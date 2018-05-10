import { IImmutable as ILocale } from '@lib/ILocale';
import { bosniaAndHerzegovina, BosniaAndHerzegovina } from '@lib/locale/Iso3166/Part1/Alpha2';
import { croatian, Croatian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Croatian language spoken in Bosnia and Herzegovina
 */
export interface IHrBa extends ILocale {
  language: Croatian;
  region: BosniaAndHerzegovina;
}

/**
 * The locale variable for the Croatian language spoken in Bosnia and Herzegovina
 */
export const hrBA: IHrBa = {
  language: croatian,
  region: bosniaAndHerzegovina,
};

export default hrBA;

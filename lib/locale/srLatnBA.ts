import ILocale from '@lib/ILocale';
import { bosniaAndHerzegovina, BosniaAndHerzegovina } from '@lib/locale/Iso3166/Part1/Alpha2';
import { serbian, Serbian } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Serbian language spoken in Bosnia and Herzegovina using the Latin script
 */
export interface ISrLatnBa extends ILocale {
  language: Serbian;
  region: BosniaAndHerzegovina;
  script: Latin;
}

/**
 * The locale variable for the Serbian language spoken in Bosnia and Herzegovina using the Latin script
 */
export const srLatnBA: ISrLatnBa = {
  language: serbian,
  region: bosniaAndHerzegovina,
  script: latin,
};

export default srLatnBA;

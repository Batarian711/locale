import ILocale from '@lib/ILocale';
import { bosniaAndHerzegovina, BosniaAndHerzegovina } from '@lib/locale/Iso3166/Part1/Alpha2';
import { bosnian, Bosnian } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Bosnian language spoken in Bosnia and Herzegovina using the Latin script
 */
export interface IBsLatnBa extends ILocale {
  language: Bosnian;
  region: BosniaAndHerzegovina;
  script: Latin;
}

/**
 * The locale variable for the Bosnian language spoken in Bosnia and Herzegovina using the Latin script
 */
export const bsLatnBA: IBsLatnBa = {
  language: bosnian,
  region: bosniaAndHerzegovina,
  script: latin
};

export default bsLatnBA;

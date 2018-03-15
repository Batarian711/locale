import ILocale from '@lib/ILocale';
import { bosniaAndHerzegovina, BosniaAndHerzegovina } from '@lib/locale/Iso3166/Part1/Alpha2';
import { bosnian, Bosnian } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Bosnian language spoken in Bosnia and Herzegovina using the Cyrillic script
 */
export interface IBsCyrlBa extends ILocale {
  language: Bosnian;
  region: BosniaAndHerzegovina;
  script: Cyrillic;
}

/**
 * The locale variable for the Bosnian language spoken in Bosnia and Herzegovina using the Cyrillic script
 */
export const bsCyrlBA: IBsCyrlBa = {
  language: bosnian,
  region: bosniaAndHerzegovina,
  script: cyrillic
};

export default bsCyrlBA;

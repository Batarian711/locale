import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { bosniaAndHerzegovina, BosniaAndHerzegovina } from '@lib/locale/Iso3166/Part1/Alpha2';
import { serbian, Serbian } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Serbian language spoken in Bosnia and Herzegovina using the Cyrillic script
 */
export interface ISrCyrlBa extends ILocale {
  language: Serbian;
  region: BosniaAndHerzegovina;
  script: Cyrillic;
}

/**
 * The locale variable for the Serbian language spoken in Bosnia and Herzegovina using the Cyrillic script
 */
export const srCyrlBA: ISrCyrlBa = {
  language: serbian,
  region: bosniaAndHerzegovina,
  script: cyrillic,
};

freeze(srCyrlBA);

export default srCyrlBA;

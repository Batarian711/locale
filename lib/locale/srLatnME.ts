import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { montenegro, Montenegro } from '@lib/locale/Iso3166/Part1/Alpha2';
import { serbian, Serbian } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Serbian language spoken in Montenegro using the Latin script
 */
export interface ISrLatnMe extends ILocale {
  language: Serbian;
  region: Montenegro;
  script: Latin;
}

/**
 * The locale variable for the Serbian language spoken in Montenegro using the Latin script
 */
export const srLatnME: ISrLatnMe = {
  language: serbian,
  region: montenegro,
  script: latin,
};

freeze(srLatnME);

export default srLatnME;

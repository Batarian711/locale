import ILocale from '@lib/ILocale';
import { serbia, Serbia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { serbian, Serbian } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Serbian language spoken in Serbia using the Latin script
 */
export interface ISrLatnRs extends ILocale {
  language: Serbian;
  region: Serbia;
  script: Latin;
}

/**
 * The locale variable for the Serbian language spoken in Serbia using the Latin script
 */
export const srLatnRS: ISrLatnRs = {
  language: serbian,
  region: serbia,
  script: latin,
};

export default srLatnRS;

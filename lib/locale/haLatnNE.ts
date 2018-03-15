import ILocale from '@lib/ILocale';
import { niger, Niger } from '@lib/locale/Iso3166/Part1/Alpha2';
import { hausa, Hausa } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Hausa language spoken in Niger using the Latin script
 */
export interface IHaLatnNe extends ILocale {
  language: Hausa;
  region: Niger;
  script: Latin;
}

/**
 * The locale variable for the Hausa language spoken in Niger using the Latin script
 */
export const haLatnNE: IHaLatnNe = {
  language: hausa,
  region: niger,
  script: latin
};

export default haLatnNE;

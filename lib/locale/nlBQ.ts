import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { bonaireSintEustatiusAndSaba, BonaireSintEustatiusAndSaba } from '@lib/locale/Iso3166/Part1/Alpha2';
import { dutch, Dutch } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Dutch language spoken in Bonaire, Sint Eustatius and Saba
 */
export interface INlBq extends ILocale {
  language: Dutch;
  region: BonaireSintEustatiusAndSaba;
}

/**
 * The locale variable for the Dutch language spoken in Bonaire, Sint Eustatius and Saba
 */
export const nlBQ: INlBq = {
  language: dutch,
  region: bonaireSintEustatiusAndSaba,
};

freeze(nlBQ);

export default nlBQ;

import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { niger, Niger } from '@lib/locale/Iso3166/Part1/Alpha2';
import { hausa, Hausa } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Hausa language spoken in Niger
 */
export interface IHaNe extends ILocale {
  language: Hausa;
  region: Niger;
}

/**
 * The locale variable for the Hausa language spoken in Niger
 */
export const haNE: IHaNe = {
  language: hausa,
  region: niger,
};

freeze(haNE);

export default haNE;

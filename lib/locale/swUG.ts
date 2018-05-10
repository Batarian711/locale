import { IImmutable as ILocale } from '@lib/ILocale';
import { uganda, Uganda } from '@lib/locale/Iso3166/Part1/Alpha2';
import { swahili, Swahili } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Swahili language spoken in Uganda
 */
export interface ISwUg extends ILocale {
  language: Swahili;
  region: Uganda;
}

/**
 * The locale variable for the Swahili language spoken in Uganda
 */
export const swUG: ISwUg = {
  language: swahili,
  region: uganda,
};

export default swUG;

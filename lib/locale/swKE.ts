import { IImmutable as ILocale } from '@lib/ILocale';
import { kenya, Kenya } from '@lib/locale/Iso3166/Part1/Alpha2';
import { swahili, Swahili } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Swahili language spoken in Kenya
 */
export interface ISwKe extends ILocale {
  language: Swahili;
  region: Kenya;
}

/**
 * The locale variable for the Swahili language spoken in Kenya
 */
export const swKE: ISwKe = {
  language: swahili,
  region: kenya,
};

export default swKE;

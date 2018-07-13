import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { kenya, Kenya } from '@lib/locale/Iso3166/Part1/Alpha2';
import { kikuyu, Kikuyu } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kikuyu language spoken in Kenya
 */
export interface IKiKe extends ILocale {
  language: Kikuyu;
  region: Kenya;
}

/**
 * The locale variable for the Kikuyu language spoken in Kenya
 */
export const kiKE: IKiKe = {
  language: kikuyu,
  region: kenya,
};

freeze(kiKE);

export default kiKE;

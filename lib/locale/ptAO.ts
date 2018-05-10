import { IImmutable as ILocale } from '@lib/ILocale';
import { angola, Angola } from '@lib/locale/Iso3166/Part1/Alpha2';
import { portuguese, Portuguese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Portuguese language spoken in Angola
 */
export interface IPtAo extends ILocale {
  language: Portuguese;
  region: Angola;
}

/**
 * The locale variable for the Portuguese language spoken in Angola
 */
export const ptAO: IPtAo = {
  language: portuguese,
  region: angola,
};

export default ptAO;

import ILocale from '@lib/ILocale';
import { romania, Romania } from '@lib/locale/Iso3166/Part1/Alpha2';
import { romanian, Romanian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Romanian language spoken in Romania
 */
export interface IRoRo extends ILocale {
  language: Romanian;
  region: Romania;
}

/**
 * The locale variable for the Romanian language spoken in Romania
 */
export const roRO: IRoRo = {
  language: romanian,
  region: romania,
};

export default roRO;

import ILocale from '@lib/ILocale';
import { moldova, Moldova } from '@lib/locale/Iso3166/Part1/Alpha2';
import { romanian, Romanian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Romanian language spoken in Moldova
 */
export interface IRoMd extends ILocale {
  language: Romanian;
  region: Moldova;
}

/**
 * The locale variable for the Romanian language spoken in Moldova
 */
export const roMD: IRoMd = {
  language: romanian,
  region: moldova
};

export default roMD;

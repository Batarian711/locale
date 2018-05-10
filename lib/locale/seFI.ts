import { IImmutable as ILocale } from '@lib/ILocale';
import { finland, Finland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { northernSami, NorthernSami } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Northern Sami language spoken in Finland
 */
export interface ISeFi extends ILocale {
  language: NorthernSami;
  region: Finland;
}

/**
 * The locale variable for the Northern Sami language spoken in Finland
 */
export const seFI: ISeFi = {
  language: northernSami,
  region: finland,
};

export default seFI;

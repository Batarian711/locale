import { IImmutable as ILocale } from '@lib/ILocale';
import { finland, Finland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { swedish, Swedish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Swedish language spoken in Finland
 */
export interface ISvFi extends ILocale {
  language: Swedish;
  region: Finland;
}

/**
 * The locale variable for the Swedish language spoken in Finland
 */
export const svFI: ISvFi = {
  language: swedish,
  region: finland,
};

Object.freeze(svFI);

export default svFI;

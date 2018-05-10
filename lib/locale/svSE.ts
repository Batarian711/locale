import { IImmutable as ILocale } from '@lib/ILocale';
import { sweden, Sweden } from '@lib/locale/Iso3166/Part1/Alpha2';
import { swedish, Swedish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Swedish language spoken in Sweden
 */
export interface ISvSe extends ILocale {
  language: Swedish;
  region: Sweden;
}

/**
 * The locale variable for the Swedish language spoken in Sweden
 */
export const svSE: ISvSe = {
  language: swedish,
  region: sweden,
};

Object.freeze(svSE);

export default svSE;

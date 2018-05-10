import { IImmutable as ILocale } from '@lib/ILocale';
import { finland, Finland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { finnish, Finnish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Finnish language spoken in Finland
 */
export interface IFiFi extends ILocale {
  language: Finnish;
  region: Finland;
}

/**
 * The locale variable for the Finnish language spoken in Finland
 */
export const fiFI: IFiFi = {
  language: finnish,
  region: finland,
};

Object.freeze(fiFI);

export default fiFI;

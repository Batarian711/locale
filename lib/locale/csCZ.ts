import { IImmutable as ILocale } from '@lib/ILocale';
import { czechRepublic, CzechRepublic } from '@lib/locale/Iso3166/Part1/Alpha2';
import { czech, Czech } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Czech language spoken in Czech Republic
 */
export interface ICsCz extends ILocale {
  language: Czech;
  region: CzechRepublic;
}

/**
 * The locale variable for the Czech language spoken in Czech Republic
 */
export const csCZ: ICsCz = {
  language: czech,
  region: czechRepublic,
};

Object.freeze(csCZ);

export default csCZ;

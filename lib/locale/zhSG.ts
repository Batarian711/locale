import { IImmutable as ILocale } from '@lib/ILocale';
import { singapore, Singapore } from '@lib/locale/Iso3166/Part1/Alpha2';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Chinese language spoken in Singapore
 */
export interface IZhSg extends ILocale {
  language: Chinese;
  region: Singapore;
}

/**
 * The locale variable for the Chinese language spoken in Singapore
 */
export const zhSG: IZhSg = {
  language: chinese,
  region: singapore,
};

Object.freeze(zhSG);

export default zhSG;

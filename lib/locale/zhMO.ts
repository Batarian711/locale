import { IImmutable as ILocale } from '@lib/ILocale';
import { macao, Macao } from '@lib/locale/Iso3166/Part1/Alpha2';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Chinese language spoken in Macao
 */
export interface IZhMo extends ILocale {
  language: Chinese;
  region: Macao;
}

/**
 * The locale variable for the Chinese language spoken in Macao
 */
export const zhMO: IZhMo = {
  language: chinese,
  region: macao,
};

Object.freeze(zhMO);

export default zhMO;

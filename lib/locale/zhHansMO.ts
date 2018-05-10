import { IImmutable as ILocale } from '@lib/ILocale';
import { macao, Macao } from '@lib/locale/Iso3166/Part1/Alpha2';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';
import { hanSimplified, HanSimplified } from '@lib/locale/Script';

/**
 * The locale interface for the Chinese language spoken in Macao using the Han Simplified script
 */
export interface IZhHansMo extends ILocale {
  language: Chinese;
  region: Macao;
  script: HanSimplified;
}

/**
 * The locale variable for the Chinese language spoken in Macao using the Han Simplified script
 */
export const zhHansMO: IZhHansMo = {
  language: chinese,
  region: macao,
  script: hanSimplified,
};

export default zhHansMO;

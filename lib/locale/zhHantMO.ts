import ILocale from '@lib/ILocale';
import { macao, Macao } from '@lib/locale/Iso3166/Part1/Alpha2';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';
import { hanTraditional, HanTraditional } from '@lib/locale/Script';

/**
 * The locale interface for the Chinese language spoken in Macao using the Han Traditional script
 */
export interface IZhHantMo extends ILocale {
  language: Chinese;
  region: Macao;
  script: HanTraditional;
}

/**
 * The locale variable for the Chinese language spoken in Macao using the Han Traditional script
 */
export const zhHantMO: IZhHantMo = {
  language: chinese,
  region: macao,
  script: hanTraditional
};

export default zhHantMO;

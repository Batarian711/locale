import { IImmutable as ILocale } from '@lib/ILocale';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';
import { hanTraditional, HanTraditional } from '@lib/locale/Script';

/**
 * The locale interface for the Chinese language using the Han Traditional script
 */
export interface IZhHant extends ILocale {
  language: Chinese;
  script: HanTraditional;
}

/**
 * The locale variable for the Chinese language using the Han Traditional script
 */
export const zhHant: IZhHant = {
  language: chinese,
  script: hanTraditional,
};

export default zhHant;

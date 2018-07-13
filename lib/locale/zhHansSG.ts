import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { singapore, Singapore } from '@lib/locale/Iso3166/Part1/Alpha2';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';
import { hanSimplified, HanSimplified } from '@lib/locale/Script';

/**
 * The locale interface for the Chinese language spoken in Singapore using the Han Simplified script
 */
export interface IZhHansSg extends ILocale {
  language: Chinese;
  region: Singapore;
  script: HanSimplified;
}

/**
 * The locale variable for the Chinese language spoken in Singapore using the Han Simplified script
 */
export const zhHansSG: IZhHansSg = {
  language: chinese,
  region: singapore,
  script: hanSimplified,
};

freeze(zhHansSG);

export default zhHansSG;

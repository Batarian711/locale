import { IImmutable as ILocale } from '@lib/ILocale';
import { hungary, Hungary } from '@lib/locale/Iso3166/Part1/Alpha2';
import { hungarian, Hungarian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Hungarian language spoken in Hungary
 */
export interface IHuHu extends ILocale {
  language: Hungarian;
  region: Hungary;
}

/**
 * The locale variable for the Hungarian language spoken in Hungary
 */
export const huHU: IHuHu = {
  language: hungarian,
  region: hungary,
};

export default huHU;

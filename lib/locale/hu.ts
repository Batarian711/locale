import { IImmutable as ILocale } from '@lib/ILocale';
import { hungarian, Hungarian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Hungarian language
 */
export interface IHu extends ILocale {
  language: Hungarian;
}

/**
 * The locale variable for the Hungarian language
 */
export const hu: IHu = {
  language: hungarian,
};

export default hu;

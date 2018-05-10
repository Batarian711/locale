import { IImmutable as ILocale } from '@lib/ILocale';
import { esperanto, Esperanto } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Esperanto language
 */
export interface IEo extends ILocale {
  language: Esperanto;
}

/**
 * The locale variable for the Esperanto language
 */
export const eo: IEo = {
  language: esperanto,
};

export default eo;

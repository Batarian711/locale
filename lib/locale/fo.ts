import { IImmutable as ILocale } from '@lib/ILocale';
import { faroese, Faroese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Faroese language
 */
export interface IFo extends ILocale {
  language: Faroese;
}

/**
 * The locale variable for the Faroese language
 */
export const fo: IFo = {
  language: faroese,
};

export default fo;

import { IImmutable as ILocale } from '@lib/ILocale';
import { anguilla, Anguilla } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Anguilla
 */
export interface IEnAi extends ILocale {
  language: English;
  region: Anguilla;
}

/**
 * The locale variable for the English language spoken in Anguilla
 */
export const enAI: IEnAi = {
  language: english,
  region: anguilla,
};

Object.freeze(enAI);

export default enAI;

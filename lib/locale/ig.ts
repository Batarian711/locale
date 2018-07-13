import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { igbo, Igbo } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Igbo language
 */
export interface IIg extends ILocale {
  language: Igbo;
}

/**
 * The locale variable for the Igbo language
 */
export const ig: IIg = {
  language: igbo,
};

freeze(ig);

export default ig;

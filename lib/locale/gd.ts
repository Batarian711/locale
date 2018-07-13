import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { scottishGaelic, ScottishGaelic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Scottish Gaelic language
 */
export interface IGd extends ILocale {
  language: ScottishGaelic;
}

/**
 * The locale variable for the Scottish Gaelic language
 */
export const gd: IGd = {
  language: scottishGaelic,
};

freeze(gd);

export default gd;

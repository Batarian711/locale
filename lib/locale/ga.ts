import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { irish, Irish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Irish language
 */
export interface IGa extends ILocale {
  language: Irish;
}

/**
 * The locale variable for the Irish language
 */
export const ga: IGa = {
  language: irish,
};

freeze(ga);

export default ga;

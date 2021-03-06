import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { tibetanStandard, TibetanStandard } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tibetan Standard language
 */
export interface IBo extends ILocale {
  language: TibetanStandard;
}

/**
 * The locale variable for the Tibetan Standard language
 */
export const bo: IBo = {
  language: tibetanStandard,
};

freeze(bo);

export default bo;

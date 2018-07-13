import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { china, China } from '@lib/locale/Iso3166/Part1/Alpha2';
import { tibetanStandard, TibetanStandard } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tibetan Standard language spoken in China
 */
export interface IBoCn extends ILocale {
  language: TibetanStandard;
  region: China;
}

/**
 * The locale variable for the Tibetan Standard language spoken in China
 */
export const boCN: IBoCn = {
  language: tibetanStandard,
  region: china,
};

freeze(boCN);

export default boCN;

import ILocale from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { tibetanStandard, TibetanStandard } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Tibetan Standard language spoken in India
 */
export interface IBoIn extends ILocale {
  language: TibetanStandard;
  region: India;
}

/**
 * The locale variable for the Tibetan Standard language spoken in India
 */
export const boIN: IBoIn = {
  language: tibetanStandard,
  region: india,
};

export default boIN;

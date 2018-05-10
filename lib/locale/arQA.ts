import { IImmutable as ILocale } from '@lib/ILocale';
import { qatar, Qatar } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Qatar
 */
export interface IArQa extends ILocale {
  language: Arabic;
  region: Qatar;
}

/**
 * The locale variable for the Arabic language spoken in Qatar
 */
export const arQA: IArQa = {
  language: arabic,
  region: qatar,
};

export default arQA;

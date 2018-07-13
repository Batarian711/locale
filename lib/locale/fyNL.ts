import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { netherlands, Netherlands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { westernFrisian, WesternFrisian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Western Frisian language spoken in Netherlands
 */
export interface IFyNl extends ILocale {
  language: WesternFrisian;
  region: Netherlands;
}

/**
 * The locale variable for the Western Frisian language spoken in Netherlands
 */
export const fyNL: IFyNl = {
  language: westernFrisian,
  region: netherlands,
};

freeze(fyNL);

export default fyNL;

import ILocale from '@lib/ILocale';
import { svalbardAndJanMayen, SvalbardAndJanMayen } from '@lib/locale/Iso3166/Part1/Alpha2';
import { norwegianBokmal, NorwegianBokmal } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Norwegian Bokmål language spoken in Svalbard and Jan Mayen
 */
export interface INbSj extends ILocale {
  language: NorwegianBokmal;
  region: SvalbardAndJanMayen;
}

/**
 * The locale variable for the Norwegian Bokmål language spoken in Svalbard and Jan Mayen
 */
export const nbSJ: INbSj = {
  language: norwegianBokmal,
  region: svalbardAndJanMayen,
};

export default nbSJ;

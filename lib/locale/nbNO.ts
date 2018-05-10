import ILocale from '@lib/ILocale';
import { norway, Norway } from '@lib/locale/Iso3166/Part1/Alpha2';
import { norwegianBokmal, NorwegianBokmal } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Norwegian Bokmål language spoken in Norway
 */
export interface INbNo extends ILocale {
  language: NorwegianBokmal;
  region: Norway;
}

/**
 * The locale variable for the Norwegian Bokmål language spoken in Norway
 */
export const nbNO: INbNo = {
  language: norwegianBokmal,
  region: norway,
};

export default nbNO;

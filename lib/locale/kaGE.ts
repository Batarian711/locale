import ILocale from '@lib/ILocale';
import { georgia, Georgia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { georgian, Georgian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Georgian language spoken in Georgia
 */
export interface IKaGe extends ILocale {
  language: Georgian;
  region: Georgia;
}

/**
 * The locale variable for the Georgian language spoken in Georgia
 */
export const kaGE: IKaGe = {
  language: georgian,
  region: georgia
};

export default kaGE;

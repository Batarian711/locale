import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { madagascar, Madagascar } from '@lib/locale/Iso3166/Part1/Alpha2';
import { malagasy, Malagasy } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Malagasy language spoken in Madagascar
 */
export interface IMgMg extends ILocale {
  language: Malagasy;
  region: Madagascar;
}

/**
 * The locale variable for the Malagasy language spoken in Madagascar
 */
export const mgMG: IMgMg = {
  language: malagasy,
  region: madagascar,
};

freeze(mgMG);

export default mgMG;

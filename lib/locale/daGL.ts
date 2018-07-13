import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { greenland, Greenland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { danish, Danish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Danish language spoken in Greenland
 */
export interface IDaGl extends ILocale {
  language: Danish;
  region: Greenland;
}

/**
 * The locale variable for the Danish language spoken in Greenland
 */
export const daGL: IDaGl = {
  language: danish,
  region: greenland,
};

freeze(daGL);

export default daGL;

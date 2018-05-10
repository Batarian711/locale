import { IImmutable as ILocale } from '@lib/ILocale';
import { indonesia, Indonesia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { indonesian, Indonesian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Indonesian language spoken in Indonesia
 */
export interface IIdId extends ILocale {
  language: Indonesian;
  region: Indonesia;
}

/**
 * The locale variable for the Indonesian language spoken in Indonesia
 */
export const idID: IIdId = {
  language: indonesian,
  region: indonesia,
};

Object.freeze(idID);

export default idID;

import { IImmutable as ILocale } from '@lib/ILocale';
import { greece, Greece } from '@lib/locale/Iso3166/Part1/Alpha2';
import { greek, Greek } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Greek language spoken in Greece
 */
export interface IElGr extends ILocale {
  language: Greek;
  region: Greece;
}

/**
 * The locale variable for the Greek language spoken in Greece
 */
export const elGR: IElGr = {
  language: greek,
  region: greece,
};

export default elGR;

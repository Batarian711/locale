import { IImmutable as ILocale } from '@lib/ILocale';
import { iceland, Iceland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { icelandic, Icelandic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Icelandic language spoken in Iceland
 */
export interface IIsIs extends ILocale {
  language: Icelandic;
  region: Iceland;
}

/**
 * The locale variable for the Icelandic language spoken in Iceland
 */
export const isIS: IIsIs = {
  language: icelandic,
  region: iceland,
};

Object.freeze(isIS);

export default isIS;

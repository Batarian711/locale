import { IImmutable as ILocale } from '@lib/ILocale';
import { pakistan, Pakistan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { punjabi, Punjabi } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Punjabi language spoken in Pakistan
 */
export interface IPaPk extends ILocale {
  language: Punjabi;
  region: Pakistan;
}

/**
 * The locale variable for the Punjabi language spoken in Pakistan
 */
export const paPK: IPaPk = {
  language: punjabi,
  region: pakistan,
};

Object.freeze(paPK);

export default paPK;

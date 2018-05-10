import { IImmutable as ILocale } from '@lib/ILocale';
import { slovenia, Slovenia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { slovene, Slovene } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Slovene language spoken in Slovenia
 */
export interface ISlSi extends ILocale {
  language: Slovene;
  region: Slovenia;
}

/**
 * The locale variable for the Slovene language spoken in Slovenia
 */
export const slSI: ISlSi = {
  language: slovene,
  region: slovenia,
};

export default slSI;

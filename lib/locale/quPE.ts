import { IImmutable as ILocale } from '@lib/ILocale';
import { peru, Peru } from '@lib/locale/Iso3166/Part1/Alpha2';
import { quechua, Quechua } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Quechua language spoken in Peru
 */
export interface IQuPe extends ILocale {
  language: Quechua;
  region: Peru;
}

/**
 * The locale variable for the Quechua language spoken in Peru
 */
export const quPE: IQuPe = {
  language: quechua,
  region: peru,
};

Object.freeze(quPE);

export default quPE;

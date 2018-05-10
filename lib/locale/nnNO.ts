import { IImmutable as ILocale } from '@lib/ILocale';
import { norway, Norway } from '@lib/locale/Iso3166/Part1/Alpha2';
import { norwegianNynorsk, NorwegianNynorsk } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Norwegian Nynorsk language spoken in Norway
 */
export interface INnNo extends ILocale {
  language: NorwegianNynorsk;
  region: Norway;
}

/**
 * The locale variable for the Norwegian Nynorsk language spoken in Norway
 */
export const nnNO: INnNo = {
  language: norwegianNynorsk,
  region: norway,
};

export default nnNO;

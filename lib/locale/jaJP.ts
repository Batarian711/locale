import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { japan, Japan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { japanese, Japanese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Japanese language spoken in Japan
 */
export interface IJaJp extends ILocale {
  language: Japanese;
  region: Japan;
}

/**
 * The locale variable for the Japanese language spoken in Japan
 */
export const jaJP: IJaJp = {
  language: japanese,
  region: japan,
};

freeze(jaJP);

export default jaJP;

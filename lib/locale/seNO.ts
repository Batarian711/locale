import { IImmutable as ILocale } from '@lib/ILocale';
import { norway, Norway } from '@lib/locale/Iso3166/Part1/Alpha2';
import { northernSami, NorthernSami } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Northern Sami language spoken in Norway
 */
export interface ISeNo extends ILocale {
  language: NorthernSami;
  region: Norway;
}

/**
 * The locale variable for the Northern Sami language spoken in Norway
 */
export const seNO: ISeNo = {
  language: northernSami,
  region: norway,
};

export default seNO;

import { IImmutable as ILocale } from '@lib/ILocale';
import { cambodia, Cambodia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { khmer, Khmer } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Khmer language spoken in Cambodia
 */
export interface IKmKh extends ILocale {
  language: Khmer;
  region: Cambodia;
}

/**
 * The locale variable for the Khmer language spoken in Cambodia
 */
export const kmKH: IKmKh = {
  language: khmer,
  region: cambodia,
};

Object.freeze(kmKH);

export default kmKH;

import ILocale from '@lib/ILocale';
import { vietNam, VietNam } from '@lib/locale/Iso3166/Part1/Alpha2';
import { vietnamese, Vietnamese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Vietnamese language spoken in Viet Nam
 */
export interface IViVn extends ILocale {
  language: Vietnamese;
  region: VietNam;
}

/**
 * The locale variable for the Vietnamese language spoken in Viet Nam
 */
export const viVN: IViVn = {
  language: vietnamese,
  region: vietNam
};

export default viVN;

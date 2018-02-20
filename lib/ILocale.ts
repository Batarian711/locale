import IGenericLocale from '@locale/ILocale';
import Iso3166Part1 from '@locale/Iso3166/Part1';
import Iso639Part1 from '@locale/Iso639/Part1';

/**
 * The interface for a locale. It consists of two parts; `language` and `country`. The language is an ISO639-1 two
 * letter string. The country is an ISO3166-1 two letter string.
 */
type ILocale = IGenericLocale<Iso639Part1, Iso3166Part1>;

export default ILocale;

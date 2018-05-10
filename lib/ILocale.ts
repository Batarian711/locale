import Iso3166 from '@lib/locale/Iso3166';
import Iso639 from '@lib/locale/Iso639';
import Script from '@lib/locale/Script';

/**
 * The interface for representing a locale. It consists of three parts; `language`, `region` and `script`. The
 * language, by default, is an ISO639-1 two letter string. The region, by default, is an ISO3166-1 two letter
 * string. The script is one of the valid script types available in this library. The `region` and `script` are
 * optional.
 * @see {@link Iso639}
 * @see {@link Iso3166}
 * @see {@link Script}
 */
export interface IImmutable<L = Iso639, R = Iso3166, S = Script> {
  /**
   * Used to help identify languages, whether spoken, written, signed, or otherwise signaled, for the purpose of
   * communication.  This includes constructed and artificial languages but excludes languages not intended
   * primarily for human communication, such as programming languages.
   * @see {@link Iso639}
   */
  readonly language: L;

  /**
   * Used to indicate linguistic variations associated with or appropriate to a specific country, territory, or
   * region. Typically, a region subtag is used to indicate variations such as regional dialects or usage, or
   * region-specific spelling conventions. It can also be used to indicate that content is expressed in a way that
   * is appropriate for use throughout a region, for instance, Spanish content tailored to be useful throughout
   * Latin America.
   * @see {@link Iso3166}
   */
  readonly region?: R;

  /**
   * Used to indicate the script or writing system variations that distinguish the written forms of a language or
   * its dialects
   * @see {@link Script}
   */
  readonly script?: S;
}

export interface IMutable<L = Iso639, R = Iso3166, S = Script> extends IImmutable<L, R, S> {
  language: L;
  region?: R;
  script?: S;
}

export default IMutable;

import { IEnGb } from '@lib/locale/enGB';
export * from '@lib/locale/enGB';

import { IEnUs } from '@lib/locale/enUS';
export * from '@lib/locale/enUS';

/**
 * The supported locales
 */
type Locale =
  IEnGb |
  IEnUs;

export default Locale;

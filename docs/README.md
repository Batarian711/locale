Provides TypeScript interfaces, class and defines for understanding a language locale. The {@link ILocale} interface
has a `language`, `region` (optional) and `script` (optional) that identifies a locale. The {@link Locale} union
provides a set of concrete locale types that are valid. All locales have a corresponding interface and constant
variable exported from the library.

```ts
import { Locale, ILocale, enGB, IEnGb } from '@ef-carbon/locale';

const locale: Locale = enGb;
```

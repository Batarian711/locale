import { ILocale, Iso3166, Iso639, locale as locales, Script } from '@lib';

class Locale implements ILocale {
  private readonly locale!: ILocale;
  language!: Iso639;
  region!: Iso3166;
  script!: Script;
  constructor(locale: ILocale) {
    Object.defineProperties(this, {
      locale: { value: locale },
      language: { get: () => this.locale.language, enumerable: true },
      region: { get: () => this.locale.region, enumerable: true },
      script: { get: () => this.locale.script, enumerable: true },
    });
  }

  toString(): string {
    const { language, region, script } = this.locale;
    if (region && script) {
      return `${language}${region}${script}`;
    } else if (region) {
      return `${language}${region}`;
    } else if (script) {
      return `${language}${script}`;
    } else {
      return language;
    }
  }
}

describe('Locale', () => {
  describe.each(Array.from(locales, l => new Locale(l)))('%s', locale => {
    it('should have a language property', () => {
      expect(locale).toHaveProperty('language');
      const { language } = locale;
      expect(typeof language === 'string').toBe(true);
    });

    it('should have an optional region property', () => {
      expect(locale).toHaveProperty('region');
      const { region } = locale;
      expect(region === undefined || typeof region === 'string').toBe(true);
    });

    it('should have an optional script property', () => {
      expect(locale).toHaveProperty('script');
      const { script } = locale;
      expect(script === undefined || typeof script === 'string').toBe(true);
    });
  });
});

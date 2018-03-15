import { } from 'jest';

import { enGB, enUS } from '@lib';

describe('Locale', () => {
  describe('enGB', () => {
    it('should be be a valid language code', () => {
      expect(enGB).toHaveProperty('language', 'en');
      expect(enGB).toHaveProperty('region', 'GB');
    });
  });

  describe('enUS', () => {
    it('should be be a valid language code', () => {
      expect(enUS).toHaveProperty('language', 'en');
      expect(enUS).toHaveProperty('region', 'US');
    });
  });
});

export interface IOptions { }

export abstract class LocaleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LocaleError';
  }
}

export default LocaleError;

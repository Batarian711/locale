import LocaleError from '@lib/Error';
import { Response } from 'node-fetch';

export interface IOptions {
  response: Response;
  message?: string;
}

export default class FetchLocaleError extends LocaleError {
  response: Response;

  constructor({ message, response }: IOptions) {
    super(message || `Failed to retrieve URL '${response.url}' [${response.status}]`);
    this.response = response;
  }
}

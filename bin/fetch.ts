import nodeFetch, { Request, RequestInit, Response } from 'node-fetch';

import FetchError from '@bin/error/Fetch';

export { Response } from 'node-fetch';

export default async function fetch(url: string | Request, init?: RequestInit): Promise<Response> {
  const response = await nodeFetch(url, init);
  if (!response.ok) { throw new FetchError({ response }); }
  return response;
}

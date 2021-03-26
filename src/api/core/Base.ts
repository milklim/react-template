import httpClient from '@/api/core/httpClient';

class Base {
  public readonly http: httpClient;

  constructor(httpClientInstance: httpClient) {
    if (!httpClientInstance) throw new Error('HttpClient required');
    this.http = httpClientInstance;
  }
}

export default Base;

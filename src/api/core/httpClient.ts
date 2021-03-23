import axios, { AxiosInstance, AxiosRequestConfig, ResponseType } from 'axios';
import { handleError, handleResponse } from '@api/core/util';
import { TApiClientPromise } from '@api/types';

class HttpClient {
  private readonly instance: AxiosInstance;

  constructor(options: AxiosRequestConfig) {
    const { baseURL } = options;
    this.instance = axios.create({
      baseURL,
      responseType: 'json',
    });
  }

  get(requestUrl: string, params = {}, responseType: ResponseType = 'json'): TApiClientPromise {
    return this.request({
      url: requestUrl,
      method: 'get',
      params,
      responseType,
    });
  }

  request(config: AxiosRequestConfig): TApiClientPromise {
    return this.instance.request(config).then(handleResponse).catch(handleError);
  }
}

export default HttpClient;

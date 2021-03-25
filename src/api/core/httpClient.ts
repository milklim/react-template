import { handleError, handleResponse } from '@api/core/util';
import { TApiClientPromise } from '@api/types';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';

class HttpClient {
  private readonly instance: AxiosInstance;

  constructor(options: AxiosRequestConfig) {
    const { baseURL } = options;
    this.instance = axios.create({
      baseURL,
      responseType: 'json',
    });
  }

  get<T>(requestUrl: string, params = {}, responseType: ResponseType = 'json'): TApiClientPromise<T> {
    return this.request<T>({
      url: requestUrl,
      method: 'get',
      params,
      responseType,
    });
  }

  put<T>(requestUrl: string, payload: T): TApiClientPromise<T> {
    return this.request<T>({
      url: requestUrl,
      method: 'put',
      data: payload,
    });
  }

  patch<T>(requestUrl: string, payload: Partial<T>): TApiClientPromise<T> {
    return this.request<T>({
      url: requestUrl,
      method: 'patch',
      data: payload,
    });
  }

  post<T>(requestUrl: string, payload: Partial<T>): TApiClientPromise<T> {
    return this.request<T>({
      url: requestUrl,
      method: 'post',
      data: payload,
    });
  }

  delete(requestUrl: string, params = {}): TApiClientPromise {
    return this.request({
      url: requestUrl,
      method: 'delete',
      params,
    });
  }

  request<T>(config: AxiosRequestConfig): TApiClientPromise<T> {
    return this.instance
      .request(config)
      .then((response: AxiosResponse) => handleResponse<T>(response))
      .catch((axiosErr: AxiosError) => handleError(axiosErr));
  }
}

export default HttpClient;

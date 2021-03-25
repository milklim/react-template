import { IApiResponse } from '@api/types';
import { AxiosError, AxiosResponse } from 'axios';

export function handleResponse<T>(response: AxiosResponse): IApiResponse<T> {
  return {
    data: response.data as T,
    error: null,
  };
}

const ERR_MSG_DEFAULT = 'Bad response from server';
export function handleError<T>(axiosErr: AxiosError): IApiResponse<T> {
  const { message, response } = axiosErr;

  return {
    data: null,
    error: {
      statusCode: response?.status || 500,
      message: message || ERR_MSG_DEFAULT,
    },
  };
}

import { AxiosError, AxiosResponse } from 'axios';
import { IApiResponse } from '@api/types';

export const handleResponse = (response: AxiosResponse): IApiResponse => {
  return {
    data: response.data,
    error: null,
  };
};

const ERR_MSG_DEFAULT = 'Bad response from server';
export const handleError = (axiosErr: AxiosError): IApiResponse => {
  const { message, response } = axiosErr;

  return {
    data: null,
    error: {
      statusCode: response?.status || 500,
      message: message || ERR_MSG_DEFAULT,
    },
  };
};

import { AxiosError, AxiosResponse } from 'axios';

export const handleResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

export const handleError = (error: AxiosError): AxiosError => {
  return error;
};

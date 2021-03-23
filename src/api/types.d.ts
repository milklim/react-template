import Posts from '@api/Posts';
import { AxiosError, AxiosResponse } from 'axios';

export interface IApi {
  posts: Posts;
}

export type TApiClientPromise = Promise<AxiosResponse | AxiosError>;

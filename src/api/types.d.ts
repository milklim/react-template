import Posts from '@api/Posts';
import { Nullable } from '@typings/common';

export interface IApi {
  posts: Posts;
}

export interface IApiResponse {
  data: unknown;
  error: Nullable<TApiError>;
}

type TApiError = {
  statusCode: number;
  message: string;
};

export type TApiClientPromise = Promise<IApiResponse>;

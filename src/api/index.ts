import HttpClient from '@api/core/httpClient';
import Posts from '@api/Posts';
import { IApi } from '@api/types';

function createApi(baseURL: string): IApi {
  const http = new HttpClient({ baseURL });

  return {
    posts: new Posts(http),
  };
}

export default createApi('https://jsonplaceholder.typicode.com/');

import HttpClient from '@/api/core/httpClient';
import Posts from '@/api/Posts';
import { IApi } from '@/api/types';

const baseURL = process.env.BASE_URL || 'https://jsonplaceholder.typicode.com/';

function createApi(): IApi {
  const http = new HttpClient({ baseURL });

  return {
    posts: new Posts(http),
  };
}

export default createApi();

import Base from '@api/core/Base';
import { TApiClientPromise } from '@api/types';
import { TPost } from '@typings/models';

class Posts extends Base {
  private readonly entity = 'posts';

  get(): TApiClientPromise<TPost[]> {
    return this.http.get<TPost[]>(this.entity);
  }

  delete(id: number): TApiClientPromise {
    return this.http.delete(`${this.entity}/${id}`);
  }
}

export default Posts;

import Base from '@api/core/Base';
import { TApiClientPromise } from '@api/types';

class Posts extends Base {
  private readonly entity = 'posts';

  get(): TApiClientPromise {
    return this.http.get(this.entity);
  }
}

export default Posts;

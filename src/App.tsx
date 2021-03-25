import api from '@api';
import { TPost } from '@typings/models';
import React, { useEffect, useState } from 'react';

import GlobalStyles from '@/styles';

const App: React.FC = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  useEffect(() => {
    api.posts.get().then(({ data, error }) => {
      if (!error && data) {
        setPosts(data);
      } else {
        // eslint-disable-next-line no-console
        console.warn(error?.statusCode, error?.message);
      }
    });
  }, []);

  const handleClick = () => {
    api.posts.delete(22).then(({ data, error }) => {
      if (!error && data) {
        // eslint-disable-next-line no-console
        console.log('\t> > > ', data);
      } else {
        // eslint-disable-next-line no-console
        console.warn(error?.statusCode, error?.message);
      }
    });
  };

  return (
    <>
      <GlobalStyles />
      <div>Boohoo!!!!</div>
      <div>{JSON.stringify(posts, null, 2)}</div>
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </>
  );
};

export default App;

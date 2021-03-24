import GlobalStyles from '@/styles';
import React, { useEffect, useState } from 'react';
import api from '@api';

const App: React.FC = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.posts.get().then(({ data, error }) => {
      if (!error) {
        setPosts(data as Array<never>);
      } else {
        // eslint-disable-next-line no-console
        console.warn(error.statusCode, error.message);
      }
    });
  }, []);
  return (
    <>
      <GlobalStyles />
      <div>Boohoo!!!!</div>
      <div>{JSON.stringify(posts, null, 2)}</div>
    </>
  );
};

export default App;

import { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=shinspiegel')
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <>
      <h1>This is a hello!</h1>
    </>
  );
};

export default Home;

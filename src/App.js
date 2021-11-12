import React, { useCallback, useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  const [postLists, setPostLists] = useState([]);
  const [error, setError] = useState(null);
  const [postId, setPostId] = useState();

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=6`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const postData = await response.json();
      const transformPostData = postData.map(post => {
        return {
          id: post.id,
          title: post.title,
          body: post.body
        };
      });
      setPostLists(transformPostData);
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();

  }, [fetchPosts]);

  const deleteJokeFn = (deleteID) => {
    setPostId(deleteID);
    try {
      const copyJokes = [...postLists];
      copyJokes.forEach((joke, index) => {
        if (joke.id === +deleteID) {
          fetch(`https://jsonplaceholder.typicode.com/posts/${deleteID}`, { method: 'DELETE' }).then(data => console.log(data.status));
          copyJokes.splice(index, 1);
          setPostLists(copyJokes);
        }
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <PostList postItem={postLists} deleteIDFn={deleteJokeFn} />
    </div>
  );
}

export default App;

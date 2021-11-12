import React from 'react';

import classes from './PostList.module.css';

const PostList = (props) => {
  let postDatas;
  const onDeleteJoke = event => {
    props.deleteIDFn(event.target.id);
  }
  if (props.postItem.length === 0) {
    postDatas = <p>No Posts.</p>
  } else {
    postDatas = props.postItem.map(post => {
      return (
        <ul key={post.id}>
          <li><b>ID:</b> {post.id}</li>
          <li><b>Title:</b> {post.title}</li>
          <li><b>Description:</b> {post.body}</li>
          <button id={post.id} >View</button>
          <button id={post.id} onClick={onDeleteJoke}>Delete</button>
          <button id={post.id} onClick={onDeleteJoke}>Edit</button>
        </ul>
      );
    })
  }

  if (props.postItem.length === 0) {
    postDatas = <p>No Posts.</p>
  } else {
    postDatas = props.postItem.map(post => {
      return (
        <ul key={post.id}>
          <li><b>ID:</b> {post.id}</li>
          <li><b>Title:</b> {post.title}</li>
          <li><b>Description:</b> {post.body}</li>
          <button id={post.id} >View</button>
          <button id={post.id} onClick={onDeleteJoke}>Delete</button>
          <button id={post.id} onClick={onDeleteJoke}>Edit</button>
        </ul>
      );
    })
  }

  return (
    <div className={classes.gridContainer}>
      {postDatas}
    </div>
  );
}

export default PostList;
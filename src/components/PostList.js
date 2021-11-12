import React from 'react';
import { useState } from 'react/cjs/react.development';

import classes from './PostList.module.css';
import ViewEditModal from './ViewEditModal';

const PostList = (props) => {
  let postDatas;
  const [showModal, setShowModal] = useState(false);
  const [singlePost, setSinglePost] = useState(null);
  const onDeleteJoke = event => {
    props.deleteIDFn(event.target.id);
  }
  const onViewJoke = (event, post) => {
    setSinglePost(post);
    setShowModal(true);
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
          <button id={post.id} onClick={(e) => onViewJoke(e, post)}>View</button>
          <button id={post.id} onClick={onDeleteJoke}>Delete</button>
        </ul>
      );
    })
  }

  // if (props.postItem.length === 0) {
  //   postDatas = <p>No Posts.</p>
  // } else {
  //   postDatas = props.postItem.map(post => {
  //     return (
  //       <ul key={post.id}>
  //         <li><b>ID:</b> {post.id}</li>
  //         <li><b>Title:</b> {post.title}</li>
  //         <li><b>Description:</b> {post.body}</li>
  //         <button id={post.id} >View</button>
  //         <button id={post.id} onClick={onDeleteJoke}>Delete</button>
  //         <button id={post.id} onClick={onDeleteJoke}>Edit</button>
  //       </ul>
  //     );
  //   })
  // }

  return (
    <div className={classes.gridContainer}>
      {postDatas}
      {showModal ? <ViewEditModal setShowModal={setShowModal} postDetails={singlePost} /> : null}
    </div>
  );
}

export default PostList;
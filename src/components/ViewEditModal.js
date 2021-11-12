import React from 'react';

import classes from './ViewEditModal.module.css';
import Card from './Card';
import { Fragment } from 'react/cjs/react.development';

const ViewEditModal = (props) => {
  const onClose = () => {
    props.setShowModal(false);
  }
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClose} />
      <ul className={classes.modal} key={props.postDetails.id}>
        <li><b>ID:</b> {props.postDetails.id}</li>
        <li><b>Title:</b> {props.postDetails.title}</li>
        <li><b>Description:</b> {props.postDetails.body}</li>
        <button id={props.postDetails.id} onClick={onClose}>Close</button>
      </ul>
    </Fragment>

  );
}

export default ViewEditModal;
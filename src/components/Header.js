import React from 'react';

import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <ul>
        <li>Posts</li>
        <li>Create Post</li>
      </ul>
    </div>
  );
}

export default Header;
import React from 'react';
import classes from './Nabar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <a className={`${ classes.item } ${classes.active}`} href="#">Profile</a>
      <a className={classes.item} href="#">Massages</a>
      <a className={classes.item} href="#">News</a>
      <a className={classes.item} href="#">Music</a>
      <a className={classes.item} href="#">Setings</a>
    </nav>
  );
}

export default Navbar;

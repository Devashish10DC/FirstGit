import React from 'react';
import CartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
    </div>
  );
};

export default Header;
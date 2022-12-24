import React from "react";
import CartButton from "./HeaderCartButton";
import mealsImage from "../../image of meals/meals.JPG";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </div>
  );
};

export default Header;

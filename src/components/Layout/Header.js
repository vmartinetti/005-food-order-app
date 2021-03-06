import React, { Fragment } from "react";
import mealImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Restaurantino</h2>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;

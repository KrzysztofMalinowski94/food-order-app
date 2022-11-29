import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";

import headerImg from "../../assets/header-img-ray-piedra.jpg";
import Button from "../Button/Button";

import CartIcon from "../../assets/svg/CartIcon";

export const Header = (props) => {
  const { className, ...otherProps } = props;

  return (
    <>
      <header
        className={`${classes.root}${className ? ` ${className}` : ""} ${
          classes.header
        }`}
        {...otherProps}
      >
        <h1>Food order app</h1>
        <Button className={classes.button}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>3</span>
        </Button>
      </header>
      <div className={classes.mainImage}>
        <img
          src={headerImg}
          alt="header-img"
        />
      </div>
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;

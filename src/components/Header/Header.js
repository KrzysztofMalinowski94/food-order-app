import React, { useContext } from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";

import headerImg from "../../assets/header-img-ray-piedra.jpg";
import Button from "../Button/Button";

import CartIcon from "../../assets/svg/CartIcon";
import CartContext from "../../contexts/CartContext";

export const Header = (props) => {
  const { className, toggleCartVisibility, ...otherProps } = props;

  const [isButtonBumped, setIsButtonBumped] = React.useState(false);

  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const cartItemsAmount = cartContext.items.reduce((currentAmount, item) => {
    return currentAmount + item.amount;
  }, 0);

  React.useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsButtonBumped(true);
    const timer = setTimeout(() => {
      setIsButtonBumped(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <header
        className={`${classes.root}${className ? ` ${className}` : ""} ${
          classes.header
        }`}
        {...otherProps}
      >
        <h1>Food order app</h1>
        <Button
          className={`${classes.button} ${isButtonBumped ? classes.bump : ""}`}
          onClick={toggleCartVisibility}
        >
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>{cartItemsAmount}</span>
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

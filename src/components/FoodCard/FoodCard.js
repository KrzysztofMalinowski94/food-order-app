import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";
import FoodCardForm from "../FoodCardForm/FoodCardForm";
import CartContext from "../../contexts/CartContext";

export const FoodCard = (props) => {
  const {id, name, description, price , className, ...otherProps } = props;

  const cartContext = React.useContext(CartContext);
  
  const addToCart = (amount) => {
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    });
  };

  return (
    <li className={classes.meal} {...otherProps}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price.toFixed(2)}</div>
      </div>
      <FoodCardForm className={"form"} addToCart={addToCart} />
    </li>
  );
};

FoodCard.propTypes = {
  className: PropTypes.string
};

export default FoodCard;

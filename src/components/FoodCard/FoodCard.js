import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";
import FoodCardForm from "../FoodCardForm/FoodCardForm";

export const FoodCard = (props) => {
  const { foodData, className, ...otherProps } = props;

  const { id, name, description, price } = foodData;

  return (
      <li
        className={classes.meal}
        {...otherProps}
      >
        <div>
          <h3>{name}</h3>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <FoodCardForm className={'form'}/>
      </li>
  );
};

FoodCard.propTypes = {
  className: PropTypes.string,
};

export default FoodCard;

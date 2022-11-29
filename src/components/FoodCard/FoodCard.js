import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";

export const FoodCard = (props) => {
  const { id, name, description, price, className, ...otherProps } = props;

  return (
    <li
      className={classes.root}
      {...otherProps}
    ></li>
  );
};

FoodCard.propTypes = {
  className: PropTypes.string,
};

export default FoodCard;

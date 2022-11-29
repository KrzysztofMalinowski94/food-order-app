import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
export const FoodList = (props) => {
  const { className, ...otherProps } = props;

  return (
    <ul
      className={classes.meals}
      {...otherProps}
    >
      {DUMMY_MEALS.map((meal) => {
        return(
          <li>
            {meal.id}
            {meal.name}
            {meal.description}
            {meal.price}
          </li>
        )
      })}
    </ul>
  );
};

FoodList.propTypes = {
  className: PropTypes.string,
};

export default FoodList;

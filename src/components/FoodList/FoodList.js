import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";
import FoodCard from "../FoodCard/FoodCard";
import Wrapper from "../Wrapper/Wrapper";

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
    <Wrapper>
      <ul
        className={classes.meals}
        {...otherProps}
      >
        {DUMMY_MEALS.map((meal) => {
          return(
            <FoodCard key={meal.id} foodData={meal}/>
          )
        })}
      </ul>
    </Wrapper>
  );
};

FoodList.propTypes = {
  className: PropTypes.string,
};

export default FoodList;

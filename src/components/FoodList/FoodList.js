import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";
import FoodCard from "../FoodCard/FoodCard";
import Wrapper from "../Wrapper/Wrapper";

export const FoodList = (props) => {
  const { className, ...otherProps } = props;

  const [meals, setMeals] = React.useState(null || []);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(null);

  React.useEffect(() => {
    getMeals();
  }, []);

  const getMeals = async () => {
    try {
      setIsLoading(true);
      const data = await fetch("https://my--food-order--app-default-rtdb.europe-west1.firebasedatabase.app/meals.json");
      const res = await data.json();
      setMeals(res);
    } catch (error) {
      setHasError(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      {hasError ? (
        `${hasError}`
      ) : isLoading ? (
        "Loading...."
      ) : (
        <ul className={classes.meals} {...otherProps}>
          {meals.map((meal) => {
            return (
              <FoodCard key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
            );
          })}
        </ul>
      )}
    </Wrapper>
  );
};

FoodList.propTypes = {
  className: PropTypes.string
};

export default FoodList;

import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

export const FoodCardForm = (props) => {
  const { className, ...otherProps } = props;

  const amountInputRef = React.useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const inputAmount = Number(amountInputRef.current.value);
  };

  return (
    <form className={classes.form} {...otherProps} onSubmit={submitHandler}>
      <Input ref={amountInputRef} label="Amount" id="amount" type="number" min="1" max="5" step="1" defaultValue="1" />
      <Button className={classes.formButton}>ADD</Button>
    </form>
  );
};

FoodCardForm.propTypes = {
  className: PropTypes.string
};

export default FoodCardForm;

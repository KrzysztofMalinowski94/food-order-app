import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";
import Button from "../Button/Button";

const postalRegex = /^[_0-9]{2}-[_0-9]{3}$/gm;

export const Checkout = (props) => {
  const { onAbortClick, onSendData } = props;

  const [formValidity, setFormValidity] = React.useState({
    name: false,
    city: false,
    street: false,
    postal: false
  });

  const nameInputRef = React.useRef();
  const streetInputRef = React.useRef();
  const postalInputRef = React.useRef();
  const cityInputRef = React.useRef();

  const isEmpty = (value) => {
    return value.trim() === "";
  };
  const postalValidator = (value) => {
    return postalRegex.exec(value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const isNameValid = !isEmpty(enteredName);
    const isCityValid = !isEmpty(enteredCity);
    const isStreetValid = !isEmpty(enteredStreet);
    const isPostalValid = postalValidator(enteredPostal);

    setFormValidity({
      name: isNameValid,
      city: isCityValid,
      street: isStreetValid,
      postal: isPostalValid
    });

    const formIsValid = isPostalValid && isCityValid && isNameValid && isStreetValid;

    if (!formIsValid) {
      return;
    }

    onSendData({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity
    });
  };

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <div className={`${classes.control} ${!formValidity.name && classes.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>please enter correct name</p>}
      </div>
      <div className={`${classes.control} ${!formValidity.street && classes.invalid}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>please enter correct street</p>}
      </div>
      <div className={`${classes.control} ${!formValidity.postal && classes.invalid}`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formValidity.postal && <p>please enter correct postal</p>}
      </div>
      <div className={`${classes.control} ${!formValidity.city && classes.invalid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>please enter correct city</p>}
      </div>
      <div className={classes.actions}>
        <Button type="button" onClick={onAbortClick}>
          Cancel
        </Button>
        <Button className={classes.submit}>Confirm</Button>
      </div>
    </form>
  );
};

Checkout.propTypes = {
  className: PropTypes.string
};

export default Checkout;

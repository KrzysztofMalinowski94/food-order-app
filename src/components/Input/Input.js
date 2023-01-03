import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";

export const Input = React.forwardRef((props,ref) => {
  const { className,id,label, ...otherProps } = props;

  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} {...otherProps} />
    </div>
  );
});

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;

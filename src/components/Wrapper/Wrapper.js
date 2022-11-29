import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";

export const Wrapper = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <div
      className={classes.wrapper}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  className: PropTypes.string,
};

export default Wrapper;

import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Input = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string
}

export default Input

import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import FoodSummary from '../FoodSummary/FoodSummary'
import FoodList from '../FoodList/FoodList'

export const FoodSection = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <FoodSummary/>
      <FoodList/>
    </div>
  )
}

FoodSection.propTypes = {
  className: PropTypes.string
}

export default FoodSection

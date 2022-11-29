import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

export const FoodCardForm = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <form
      className={classes.form}
      {...otherProps}
    >
      <Input/>
      <Button className={classes.formButton}>ADD</Button>
    </form>
  )
}

FoodCardForm.propTypes = {
  className: PropTypes.string
}

export default FoodCardForm

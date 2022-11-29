import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Button from '../Button/Button'

export const Cart = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const cartItems = [{id: 'c1', name:"Sushi", amount: 2, price:11.99}].map((el)=>{
    <li>{el.name}</li>
  })

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.92</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes['button--alt']}>Close</Button>
        <Button className={classes.button}>Order</Button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  className: PropTypes.string
}

export default Cart

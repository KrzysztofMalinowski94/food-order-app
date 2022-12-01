import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'

export const Cart = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const cartItems = [{id: 'c1', name:"Sushi", amount: 2, price:11.99}].map((el)=>{
    return <li key={el.id} className={classes['cart-items']}>{el.name}</li>
  })

  return (
    <Modal
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.92</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes['button--alt']} onClick = {props.toggleCartVisibility}>Close</Button>
        <Button className={classes.button}>Order</Button>
      </div>
    </Modal>
  )
}

Cart.propTypes = {
  className: PropTypes.string
}

export default Cart

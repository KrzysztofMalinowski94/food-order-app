import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import CartContext from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";

export const Cart = (props) => {
  const { className, ...otherProps } = props;

  const [isCheckout, setIsCheckout] = React.useState(false);

  const cartContext = React.useContext(CartContext);

  const totalAmount = `${cartContext.totalAmount.toFixed(2)} zł`;

  const orderIsDisabled = cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const checkoutClickHandlerOpen = () => {
    setIsCheckout(true);
  };
  const checkoutClickHandlerClose = () => {
    setIsCheckout(false);
  };

  const placeOrderHandler = (userData) =>{
    fetch("https://my--food-order--app-default-rtdb.europe-west1.firebasedatabase.app/userOrder",{
      method:"POST",
      body: JSON.stringify({user: userData, orderItems: cartContext.items})
    })
  }

  const cartItems = (
    <ul>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onAbortClick={checkoutClickHandlerClose} onSendData = {placeOrderHandler} />}
      {!isCheckout && (
        <div className={classes.actions}>
          <Button className={classes["button--alt"]} onClick={props.toggleCartVisibility}>
            Close
          </Button>
          {orderIsDisabled && (
            <Button className={classes.button} onClick={checkoutClickHandlerOpen}>
              Order
            </Button>
          )}
        </div>
      )}
    </Modal>
  );
};

Cart.propTypes = {
  className: PropTypes.string
};

export default Cart;

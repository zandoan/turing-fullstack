import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import CartItem from "./CartItem";

const Cart = props => {
  const { cart, removeFromCart, toggleView, total, updateCart } = props;
  return (
    <>
      <h1>Cart Items</h1>
      <List>
        {cart && cart.length
          ? cart.map(product => (
              <ListItem key={product.cartItemID}>
                <CartItem
                  data={product}
                  onRemoveFromCart={removeFromCart}
                  onUpdateCart={(item, id) => updateCart(item, id)}
                />
              </ListItem>
            ))
          : "Cart Empty"}
      </List>
      {cart.length ? (
        <>
          <h1>Total ${total} (Before Tax and Shipping)</h1>{" "}
          <Button
            onClick={() => {
              toggleView("Checkout");
            }}
          >
            Checkout
          </Button>
        </>
      ) : null}
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: item => dispatch({ type: "REMOVE", val: item }),
    updateCart: (item, id) =>
      dispatch({ type: "UPDATE", val: item, cartItemID: id })
  };
};

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    cartID: state.cart.cartID,
    total: state.cart.total
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({
        quantity: PropTypes.number,
        size: PropTypes.string,
        color: PropTypes.string
      }),
      cartItemID: PropTypes.string,
      description: PropTypes.string,
      discounted_price: PropTypes.number,
      display: PropTypes.number,
      image: PropTypes.string,
      image_2: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      product_id: PropTypes.number,
      thumbnail: PropTypes.string
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
  toggleView: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
};

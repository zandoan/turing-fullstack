import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import CartItem from "./CartItem";

const Cart = props => {
  const { cart, total, removeFromCart, updateCart } = props;
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
              // console.log("Checkout Clicked");
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
    addToCart: (item, id) => dispatch({ type: "ADD", val: item, id }),
    removeFromCart: item => dispatch({ type: "REMOVE", val: item }),
    getCartFromSession: id => dispatch({ type: "LOADSESSION", id }),
    updateCart: (item, id) =>
      dispatch({ type: "UPDATE", val: item, cartItemID: id })
  };
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    cartID: state.cartID,
    total: state.total
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
  total: PropTypes.number.isRequired
};

import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CartItem from "./CartItem";

const Cart = props => {
  // console.log("INSIDE CART");
  const { cart, cartID, total, removeFromCart, updateCart } = props;
  // console.log(cart);
  // console.log(updateCart);
  return (
    <>
      <h1>Cart Items</h1>
      <List>
        {cart && cart.length
          ? cart.map((product, index) => (
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
              console.log("Checkout Clicked");
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

import React from "react";
import Button from "@material-ui/core/Button";
// import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

// custom button on top to save shipping, payments, and confirm order
// button on top changes to confirm each section
// shipping and handling, tax, total will be calculated based on api
// calls with data from user (address - tax+ shipping)

const OrderSummary = props => {
  const { cart, total } = props;
  console.log("ORDER SUMMARY");
  console.log(cart);
  return (
    <>
      <Button
        onClick={() => {
          console.log("Order Summary Custom button pressed");
        }}
      >
        Order Summary btn
      </Button>
      <Divider />
      <h1>Order Summary</h1>
      <h3>Items: ${total}</h3>
      <h3>Shipping and handling: --</h3>
      <h3>Total before tax: --</h3>
      <h3>Estimated tax to be collected: --</h3>
      <Divider />
      <h3>Order total: --</h3>
      <Grid container />
    </>
  );
};

export default OrderSummary;

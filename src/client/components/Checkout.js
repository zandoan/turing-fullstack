import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Shipping from "./Shipping";
import Payments from "./Payments";
import OrderSummary from "./OrderSummary";

// Use Amazon checkout as prototype
// shipping information
// display shipping estimate after entered
// payment information
// show final cart preview
// validation and verification/warnings
// connect to strip api
// on success, on fail - backend checks

const Checkout = props => {
  return (
    <>
      <Paper>
        <h1>Checkout (x items)</h1>
        <Grid container />
        <Shipping />
        <Payments />
        <OrderSummary />
        <Button
          onClick={() => {
            props.toggleView("Cart");
          }}
        >
          Back to Cart
        </Button>
      </Paper>
    </>
  );
};

export default Checkout;

Checkout.propTypes = {
  toggleView: PropTypes.func.isRequired
};

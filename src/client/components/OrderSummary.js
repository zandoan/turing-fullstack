import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

// custom button on top to save shipping, payments, and confirm order
// Order Summary
// Items:	$5.94
// Shipping & handling:	--
// Total before tax:	--
// Estimated tax to be collected:	--
// Order total:	--

const OrderSummary = props => {
  return (
    <>
      <Paper>
        <Button
          onClick={() => {
            console.log("Order Summary Custom button pressed");
          }}
        >
          Order Summary btn
        </Button>
        <Divider />
        <h1>Order Summary</h1>
        <h3>Items: $5.94</h3>
        <h3>Shipping and handling: --</h3>
        <h3>Total before tax: --</h3>
        <h3>Estimated tax to be collected: --</h3>
        <Divider />
        <h3>Order total: --</h3>
        <Grid container />
      </Paper>
    </>
  );
};

export default OrderSummary;

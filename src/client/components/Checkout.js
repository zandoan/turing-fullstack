import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import CheckoutReview from "./CheckoutReview";
import OrderSummary from "./OrderSummary";
import Payments from "./Payments";
import Shipping from "./Shipping";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

// Use Amazon checkout as prototype
// shipping information
// display shipping estimate after entered
// payment information
// show final cart preview
// validation and verification/warnings
// connect to strip api
// on success, on fail - backend checks

const Checkout = props => {
  const classes = useStyles();
  const { cart, total } = props;
  console.log("CHECKOUT");
  console.log(cart);

  const cartItemAmount = () => {
    return (
      <h1>
        Checkout (
        <Button
          onClick={() => {
            props.toggleView("Cart");
          }}
        >
          {(cart || []).length} items
        </Button>
        )
      </h1>
    );
  };
  return (
    <Paper>
      {cartItemAmount()}
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Shipping />
            <Payments />
            <CheckoutReview />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OrderSummary cart={cart} total={total} />
          </Paper>
        </Grid>
      </Grid>
      <Button
        onClick={() => {
          props.toggleView("Cart");
        }}
      >
        Back to Cart
      </Button>
    </Paper>
  );
};

export default Checkout;

Checkout.propTypes = {
  toggleView: PropTypes.func.isRequired
};

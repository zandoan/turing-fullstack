import React from "react";
import Button from "@material-ui/core/Button";
// import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
// Review Cart information and submit order

const CheckoutReview = props => {
  const { checkout } = props;
  console.log(checkout);
  return (
    <>
      <p>Review Component</p>
      <Grid container />
      <Button
        onClick={() => {
          console.log("place order");
        }}
      >
        Place your order
      </Button>
    </>
  );
};

export default CheckoutReview;

import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

// shipping information

const Shipping = props => {
  return (
    <>
      <p>Shipping Component</p>
      <Grid container />
      <Button
        onClick={() => {
          console.log("confirm shipping");
        }}
      >
        Confirm Shipping
      </Button>
    </>
  );
};

export default Shipping;

import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
// payment information

const Payments = props => {
  return (
    <>
      <p>Payments Component</p>
      <Grid container />

      <Button
        onClick={() => {
          console.log("Payments confirmed");
        }}
      >
        Confirm Payment
      </Button>
    </>
  );
};

export default Payments;

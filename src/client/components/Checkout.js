import React from "react";
import PropTypes from "prop-types";

// show cart preview
// shipping information
// display shipping estimate after entered
// payment information
// validation and verification/warnings
// connect to strip api

const Checkout = props => {
  return (
    <>
      <p>Checkout...</p>
      <button
        type="button"
        onClick={() => {
          props.toggleView("Cart");
        }}
      >
        whatttt
      </button>
    </>
  );
};

export default Checkout;

Checkout.propTypes = {
  toggleView: PropTypes.func.isRequired
};

// show cart preview
// shipping information
// display shipping estimate after entered
// payment information
// validation and verification/warnings
// connect to strip api
import React from "react";

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

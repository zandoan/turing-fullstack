const initialCheckoutData = { cartData: {}, shippingData: {}, paymentData: {} };

const checkout = (state = initialCheckoutData, action) => {
  if (action.type === "SHIPPING") {
    console.log("ship hooooorn");
    return {
      ...state,
      shippingData: {
        firstName: "Devon",
        lastName: "Yu",
        address1: "1015 Folsom st",
        address2: "",
        city: "San Francisco",
        state: "California",
        country: "US",
        email: "devonyu415@gmail.com"
      }
    };
  }
  return state;
};

export default checkout;

const initialCheckoutData = { cartData: {}, shippingData: {}, paymentData: {} };

const checkout = (state = initialCheckoutData, action) => {
  if (action.type === "SHIPPING") {
    console.log("Shipping Complete");
    return {
      ...state,
      shippingData: {
        firstName: "Devon",
        lastName: "Yu",
        address1: "1015 Folsom st",
        address2: "",
        city: "San Francisco",
        zip: 94109,
        state: "California",
        country: "US"
      }
    };
  }
  if (action.type === "PAYMENT") {
    console.log("Payment Complete");
    return {
      ...state,
      paymentData: {
        name: "Devon Yu",
        creditCard: 4145123412341234,
        expiration: "01/23",
        code: 9999
      }
    };
  }
  return state;
};

export default checkout;

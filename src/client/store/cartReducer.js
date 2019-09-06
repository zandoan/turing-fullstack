// const initialCart = {
//   cart: []
// };

const initialCart = [];

const cartReducer = (state = initialCart, action) => {
  let newCart = [...state];
  console.log(`Begin newState => ${JSON.stringify(newCart)}`);
  if (action.type === "ADD") {
    console.log("inside REDUCER");
    console.log("adding val =>", action.val);
    newCart.push(action.val);
    console.log("AFTER ACTIONS REDUCER, state ====== ", newCart);
  }
  if (action.type === "REMOVE") {
    newCart = newCart.filter(item => item.name !== action.val.name);
  }

  return newCart;
};

export default cartReducer;

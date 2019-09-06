const nanoid = require("nanoid");

const initialCart = [];

const cartReducer = (state = initialCart, action) => {
  let newCart = [...state];
  if (action.type === "ADD") {
    // Add CartItemID to item
    action.val.cartItemID = nanoid();
    newCart.push(action.val);
  }
  if (action.type === "REMOVE") {
    newCart = newCart.filter(item => item.cartItemID !== action.val.cartItemID);
  }

  return newCart;
};

export default cartReducer;

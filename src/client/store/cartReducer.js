const nanoid = require("nanoid");

const initialCart = { cart: [], total: 0, cartID: nanoid() };

const cartReducer = (state = initialCart, action) => {
  let { total } = state;
  console.log(total);
  if (action.type === "ADD") {
    // Add CartItemID to item
    action.val.cartItemID = nanoid();
    if (action.val.discounted_price !== 0) {
      total += action.val.discounted_price * action.val.attributes.quantity;
    } else {
      total += action.val.price * action.val.attributes.quantity;
    }
    return {
      ...state,
      cart: [...state.cart, action.val],
      total: parseFloat(total.toFixed(2))
    };
  }

  if (action.type === "REMOVE") {
    const newCart = state.cart.filter(
      item => item.cartItemID !== action.val.cartItemID
    );
    if (action.val.discounted_price !== 0) {
      total -= action.val.discounted_price * action.val.attributes.quantity;
    } else {
      total -= action.val.price * action.val.attributes.quantity;
    }
    return {
      ...state,
      cart: [...newCart],
      total: parseFloat(total.toFixed(2))
    };
  }

  return state;
};

export default cartReducer;

import { updateSession, getSessionCart } from "../utils/localstorage";

const nanoid = require("nanoid");

const initialCart = { cart: [], total: 0, cartID: null };

const cartReducer = (state = initialCart, action) => {
  let { total } = state;

  if (action.type === "LOADSESSION") {
    const sessionCart = getSessionCart(action.id);
    return {
      ...state,
      ...sessionCart
    };
  }

  if (action.type === "ADD") {
    // Add CartItemID to item
    action.val.cartItemID = nanoid();
    if (action.val.discounted_price !== 0) {
      total += action.val.discounted_price * action.val.attributes.quantity;
    } else {
      total += action.val.price * action.val.attributes.quantity;
    }
    updateSession(action.id, {
      ...state,
      cartID: action.id,
      cart: [...state.cart, action.val],
      total: parseFloat(total.toFixed(2))
    });
    return {
      ...state,
      cartID: action.id,
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
    updateSession(action.id, {
      ...state,
      cartID: action.id,
      cart: [...newCart],
      total: parseFloat(total.toFixed(2))
    });
    return {
      ...state,
      cartID: action.id,
      cart: [...newCart],
      total: parseFloat(total.toFixed(2))
    };
  }

  return state;
};

export default cartReducer;

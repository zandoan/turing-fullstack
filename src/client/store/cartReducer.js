import { updateSession, getSessionCart } from "../utils/localstorage";

const nanoid = require("nanoid");

const initialCart = { cart: [], total: 0, cartID: null };

const cart = (state = initialCart, action) => {
  let { total } = state;

  if (action.type === "LOADSESSION") {
    const sessionCart = getSessionCart(action.id);
    return {
      ...state,
      ...sessionCart
    };
  }

  if (action.type === "ADD") {
    const itemCopy = { ...action.val, cartItemID: nanoid() };
    if (action.val.discounted_price !== 0) {
      total += action.val.discounted_price * action.val.attributes.quantity;
    } else {
      total += action.val.price * action.val.attributes.quantity;
    }

    updateSession(action.id, {
      ...state,
      cartID: action.id,
      cart: [...state.cart, itemCopy],
      total: parseFloat(total.toFixed(2))
    });

    return {
      ...state,
      cartID: action.id,
      cart: [...state.cart, itemCopy],
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

  if (action.type === "UPDATE") {
    const key = Object.keys(action.val)[0];
    const val = Object.values(action.val)[0];
    const updatedCart = [...state.cart].map(item => {
      if (item.cartItemID === action.cartItemID) {
        const itemCopy = {
          ...item,
          attributes: {
            ...item.attributes,
            [key]: val
          }
        };
        return itemCopy;
      }
      return item;
    });

    if (key === "quantity") {
      total = updatedCart.reduce((sum, cartItem) => {
        const price =
          cartItem.discounted_price !== 0
            ? cartItem.discounted_price
            : cartItem.price;
        return sum + price * cartItem.attributes.quantity;
      }, 0);
    }

    updateSession(action.id, {
      ...state,
      cartID: action.id,
      cart: [...updatedCart],
      total: parseFloat(total.toFixed(2))
    });

    return {
      ...state,
      cartID: action.id,
      cart: [...updatedCart],
      total: parseFloat(total.toFixed(2))
    };
  }

  return state;
};

export default cart;

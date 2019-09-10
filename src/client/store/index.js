const { createStore } = require("redux");

// Seeing how Redux works
const initialState = {
  cart: []
};

const myReducer = (state = initialState, action) => {
  let newState = { ...state };

  if (action.type === "ADD") {
    newState.cart.push(action.val);
  }
  if (action.type === "REMOVE") {
    newState = newState.cart.filter(item => item.name !== action.val.name);
  }

  return newState;
};

const store = createStore(myReducer);
store.subscribe(() => {
  // console.log("state changed! => ", JSON.stringify(store.getState()));
});

store.dispatch({ type: "ADD", val: { name: "Picasso", price: 14.99 } });
store.dispatch({ type: "ADD", val: { name: "Van Ness", price: 33.99 } });
store.dispatch({ type: "ADD", val: { name: "Palamo", price: 323.99 } });
store.dispatch({ type: "REMOVE", val: { name: "Picasso" } });

// console.log(store.getState());

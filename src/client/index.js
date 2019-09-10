import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import App from "./App";
import cart from "./store/cartReducer";
import checkout from "./store/checkoutReducer";

const rootReducer = combineReducers({
  cart,
  checkout
});
const store = createStore(rootReducer);
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

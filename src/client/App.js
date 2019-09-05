import React, { Component } from "react";
import "./app.css";
import Main from "./components/Main";

export default class App extends Component {
  state = {
    username: null,
    categories: null,
    departments: null,
    cart: []
  };

  componentDidMount() {
    fetch("/api/getUsername")
      .then(res => res.json())
      .then(username => this.setState({ username }));
    fetch("/api/categories")
      .then(res => res.json())
      .then(categories => this.setState({ categories }));
    fetch("/api/departments")
      .then(res => res.json())
      .then(departments => this.setState({ departments }));
  }

  onClearCart = () => {
    this.setState({ cart: [] });
  };

  onAddToCart = item => {
    // console.log("APP LEVEL => Adding to cart , ", item);
    this.setState(state => {
      const cart = state.cart.concat(item);
      return {
        cart
      };
    });
  };

  onUpdateCart = () => {
    // this.setState({ cart: [] });
    console.log("update quantity for item");
  };

  onRemoveItemFromCart = () => {
    // this.setState({ cart: [] });
    console.log("delete item");
  };

  render() {
    const { cart, categories, departments, username } = this.state;
    // console.log(username, departments, categories, cart);
    return (
      <div>
        <Main
          username={username}
          cart={cart}
          categories={categories}
          departments={departments}
          onAddToCart={item => {
            this.onAddToCart(item);
          }}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./app.css";
import { connect } from "react-redux";
import Main from "./components/Main";

class App extends Component {
  state = {
    username: null,
    categories: null,
    departments: null
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

  onAddToCart = item => {
    console.log("top level add to cart trigger =item => ", item);
    this.props.addToCart(item);
    console.log("CURRENT STATE");
    console.log(this.props.state);
  };

  onRemoveFromCart = item => {
    this.props.removeFromCart(item);
  };

  render() {
    const { categories, departments, username } = this.state;
    const { cart } = this.props;
    console.log("APP LEVEL");
    console.log(username, departments, categories, cart);
    return (
      <div>
        <Main
          username={username}
          categories={categories}
          departments={departments}
          onAddToCart={item => {
            this.onAddToCart(item);
          }}
          onRemoveFromCart={item => {
            this.onRemoveFromCart(item);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = cart => {
  return {
    cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch({ type: "ADD", val: item }),
    removeFromCart: item => dispatch({ type: "REMOVE", val: item })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

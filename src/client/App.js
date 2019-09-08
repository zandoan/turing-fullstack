import React, { Component } from "react";
import "./app.css";
import { connect } from "react-redux";
import axios from "axios";
import Main from "./components/Main";

class App extends Component {
  state = {
    username: null,
    categories: null,
    departments: null
  };

  componentDidMount() {
    Promise.all([
      axios.get("/api/getUsername"),
      axios.get("/api/categories"),
      axios.get("/api/departments")
    ]).then(([res1, res2, res3]) => {
      // console.log(res1.data.username);
      // console.log(res2.data);
      // console.log(res3.data);
      this.setState({
        categories: res2.data,
        departments: res3.data,
        username: res1.data.username
      });
    });
  }

  onAddToCart = (item, attributes) => {
    // console.log("top level add to cart trigger =item => ", item);
    // console.log("top level add to cart trigger Atrributes => ", attributes);
    const finalItem = { ...item, attributes };
    this.props.addToCart(finalItem);
  };

  onRemoveFromCart = item => {
    this.props.removeFromCart(item);
  };

  render() {
    const { categories, departments, username } = this.state;
    const { cart } = this.props;
    // console.log("APP LEVEL");
    // console.log(username, departments, categories, cart);
    return (
      <div>
        <Main
          username={username}
          categories={categories}
          departments={departments}
          onAddToCart={(item, attributes) => {
            this.onAddToCart(item, attributes);
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

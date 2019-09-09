import React, { Component } from "react";
import "./app.css";
import { connect } from "react-redux";
import axios from "axios";
// import ls from "local-storage";
import Main from "./components/Main";
import {
  createSession,
  clearSession,
  updateSession,
  getSession
} from "./utils/localstorage";

// const nanoid = require("nanoid");

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
    this.checkSession();
  }

  checkSession = () => {
    if (getSession()) {
      console.log("theres a session bro");
      console.log(getSession());
    } else {
      console.log("no session yet");
    }
  };

  onAddToCart = (item, attributes) => {
    // console.log("top level add to cart trigger =item => ", item);
    // console.log("top level add to cart trigger Atrributes => ", attributes);
    let cartID;
    if (getSession()) {
      console.log(getSession());
      cartID = getSession();
    } else {
      cartID = createSession();
    }
    const finalItem = { ...item, attributes };

    this.props.addToCart(finalItem, cartID);
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
    addToCart: (item, id) => dispatch({ type: "ADD", val: item, id }),
    removeFromCart: item => dispatch({ type: "REMOVE", val: item })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

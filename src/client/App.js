import "./app.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { createSession, getSessionID } from "./utils/localstorage";

import Main from "./components/Main";

const sessionID = getSessionID();

class App extends Component {
  state = {
    username: "",
    categories: [],
    departments: []
  };

  componentDidMount() {
    Promise.all([
      axios.get("/api/getUsername"),
      axios.get("/api/categories"),
      axios.get("/api/departments")
    ]).then(([res1, res2, res3]) => {
      this.setState({
        categories: res2.data,
        departments: res3.data,
        username: res1.data.username
      });
      this.checkSession(sessionID);
    });
  }

  checkSession = () => {
    if (getSessionID(sessionID)) {
      // console.log("Session Found, loading data...");
      this.loadCartFromSession(sessionID);
    } else {
      // console.log("No session yet, creating one");
      createSession();
    }
  };

  loadCartFromSession = () => {
    const { getCartFromSession } = this.props;
    getCartFromSession(sessionID);
  };

  onAddToCart = (item, attributes) => {
    const finalItem = { ...item, attributes };
    const { addToCart } = this.props;
    addToCart(finalItem, sessionID);
  };

  onRemoveFromCart = item => {
    const { removeFromCart } = this.props;
    removeFromCart(item);
  };

  render() {
    const { categories, departments, username } = this.state;
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

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, id) => dispatch({ type: "ADD", val: item, id }),
    removeFromCart: item => dispatch({ type: "REMOVE", val: item }),
    getCartFromSession: id => dispatch({ type: "LOADSESSION", id }),
    updateCart: (item, id) => dispatch({ type: "UPDATE", val: item, id })
  };
};

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  addToCart: PropTypes.func.isRequired,
  getCartFromSession: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

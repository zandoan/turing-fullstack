import React, { Component } from "react";
import "./app.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch("/api/getUsername")
      .then(res => res.json())
      .then(username => this.setState({ username }));
  }

  render() {
    const { username } = this.state;
    console.log(username);
    return (
      <div>
        <NavBar />
        {username ? (
          <h1>Welcome back, {username.username}!</h1>
        ) : (
          <h1>Loading Username...</h1>
        )}
        <ProductList />
      </div>
    );
  }
}

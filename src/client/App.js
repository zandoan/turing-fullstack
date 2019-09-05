import React, { Component } from 'react';
import './app.css';
import Main from './components/Main';

export default class App extends Component {
  state = { username: null, categories: null, departments: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(username => this.setState({ username }));
    fetch('/api/categories')
      .then(res => res.json())
      .then(categories => this.setState({ categories }));
    fetch('/api/departments')
      .then(res => res.json())
      .then(departments => this.setState({ departments }));
  }

  render() {
    const { categories, departments, username } = this.state;
    console.log(username, departments, categories);
    return (
      <div>
        <Main
          username={username}
          categories={categories}
          departments={departments}
        />
      </div>
    );
  }
}

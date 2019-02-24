import React, { Component } from 'react';
import Header from './Header/header';
import Books from './books';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
      </div>
    );
  }
}

export default App;

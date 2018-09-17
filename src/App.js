import React, { Component } from 'react';
import Router from "./components/Router"
import Navigation from "./components/navigation"

class App extends Component {
  render() {
    return (
      <div className ="page-container">
      <Navigation />
      <Router />
      </div>
    );
  }
}

export default App;

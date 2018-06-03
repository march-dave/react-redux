import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FilterList from "./FilterList.js";
import { store } from "redux";
import { Provider, connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            <FilterList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

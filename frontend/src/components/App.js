import React, { Component } from "react";
// import { render } from "react-dom";
import ReactDOM from "react-dom";

import Header from './layout/Header'

class App extends Component {
  render () {
    return (
      <Header />
    )
  }
}

export default App;

// const container = document.getElementById("app");
// render(<App />, container);

ReactDOM.render(<App />, document.getElementById('app'));

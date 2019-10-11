import React from "react";
import "./App.css";

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import SmurfList from './smurfList'

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfList/>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);

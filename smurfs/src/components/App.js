import React from "react";
import "./App.css";

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import SmurfList from './smurfList';
import AddSmurf from './smurfAddForm'

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      
      <SmurfList/>
      <AddSmurf/>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import * as reducers from "./state/reducers";

const bigStore = combineReducers({
  smurf: reducers.smurfReducer,
  form:reducers.formReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  bigStore,
  composeEnhancer(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

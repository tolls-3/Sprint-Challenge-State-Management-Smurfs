import axios from "axios";
import * as types from "./actionTypes";

const smurfApi = "http://localhost:3333/smurfs";

export function inputChange(target) {
    return {
      type: types.ON_INPUT_CHANGE,
      payload: {
        name: target.name,
        value: target.value,
      },
    };
  }

export function fetchSmurf() {
  return function(dispatch) {
    axios
      .get(smurfApi)
      .then(res =>
        dispatch({
          type: types.FETCH_SMURF_SUCCESS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: types.FETCH_SMURF_FAILURE,
          payload: err
        })
      );
  };
}

export function addSmurf(char) {
  return function(dispatch) {
    axios
      .post(smurfApi, char)
      .then(res =>
        dispatch({
          type: types.ADD_SMURF_SUCCESS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: types.ADD_SMURF_FAILURE,
          payload: err
        })
      );
  };
}

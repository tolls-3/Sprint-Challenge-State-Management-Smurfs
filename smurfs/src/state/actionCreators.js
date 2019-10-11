import axios from "axios";
import * as types from "./actionTypes";

const smurfApi = "http://localhost:3333/smurfs";

export function fetchSmurf() {
    dispatch({
        type:types.FETCH_SMURF_START, 
        payload:res.data
    })
  return function(dispatch) {
      axios
      .get(smurfApi)
      .then(res=>
        dispatch({
            type:types.FETCH_SMURF_SUCCESS, 
            payload:res.data
        })
        )
        .catch(err=>dispatch({
            type:types.FETCH_SMURF_FAILURE,
            payload:err
        }))
  };
}

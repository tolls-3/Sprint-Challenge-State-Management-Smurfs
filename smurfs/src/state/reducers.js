import * as types from "./actionTypes";

const initialSmurfState = {
  data: [],
  error: "",
  isFetching: false
};

export function smurfReducer(state = initialSmurfState, action) {
  switch (action.type) {
    case types.FETCH_SMURF_START:
      return {
          ...state,
          isFetching:true, 
      };
    case types.FETCH_SMURF_SUCCESS:
      return {
          ...state, 
          isFetching:false,
          data: action.payload
      };
    case types.FETCH_SMURF_FAILURE:
      return {
          ...state, 
          error: action.payload,
      };
    case types.ADD_SMURF_START:
      return {};
    case types.ADD_SMURF_SUCCESS:
      return {};
    case types.ADD_SMURF_FAILURE:
      return {};
    default:
      return state;
  }
}

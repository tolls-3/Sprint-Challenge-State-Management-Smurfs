import * as types from "./actionTypes";

const initialSmurfState = {
  data: [],
  error: "",
  isFetching: false
};


const initialFormState = {
    Name: '',
    Age: '',
    Height:'',
  };

export function formReducer(state = initialFormState, action) {
    switch (action.type) {
      case types.ON_INPUT_CHANGE:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  }
  


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
      return {
          ...state, 
          data: [...state.data, action.payload]
      };
    case types.ADD_SMURF_SUCCESS:
      return {
          ...state,
          data:action.payload,
      };
    case types.ADD_SMURF_FAILURE:
      return {
          ...state,
          error:action.payload
      };
    default:
      return state;
  }
}

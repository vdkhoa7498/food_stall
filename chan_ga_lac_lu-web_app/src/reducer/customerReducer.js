import {
    GET_NAME,
    GET_PHONE,
  } from "../action/customerAction";
  
  const inititalState = {
    data: []
  };
  
  const customersNameReducer = (state = inititalState, action) => {
    switch (action.type) {
      case GET_NAME:
        return {
          ...state,
          data: action.data
        };
      default:
        return state;
    }
  };

  const customersPhoneReducer = (state = inititalState, action) => {
    switch (action.type) {
      case GET_PHONE:
        return {
          ...state,
          data: action.data
        };
      default:
        return state;
    }
  };
  
  export {customersNameReducer, customersPhoneReducer};
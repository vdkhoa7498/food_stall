import {
    GET_STREETS,
    GET_DISTRICTS,
    GET_CITIES,
  } from "../action/addressAction";
  
  const inititalState = {
    data: []
  };
  
  const streetsReducer = (state = inititalState, action) => {
    switch (action.type) {
      case GET_STREETS:
        return {
          ...state,
          data: action.data
        };
      default:
        return state;
    }
  };

  const districtsReducer = (state = inititalState, action) => {
    switch (action.type) {
      case GET_DISTRICTS:
        return {
          ...state,
          data: action.data
        };
      default:
        return state;
    }
  };

  const citiesReducer = (state = inititalState, action) => {
    switch (action.type) {
      case GET_CITIES:
        return {
          ...state,
          data: action.data
        };
      default:
        return state;
    }
  };
  
  export {streetsReducer, districtsReducer, citiesReducer};
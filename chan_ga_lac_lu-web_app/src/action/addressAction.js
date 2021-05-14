import {  getCities, 
          getDistricts, 
          getStreets, } from "../services/address.services";

export const GET_STREETS = "GET_STREETS";
export const GET_DISTRICTS = "GET_DISTRICTS";
export const GET_CITIES = "GET_CITIES";

export const initAddress = () => {
  return (dispatch) => {
    
    getStreets()
    .then(res=>{
      dispatch(getStreets_(res.data))
    })
    .catch(err=>console.log(err))

    getDistricts()
    .then(res=>{
      
      dispatch(getDistricts_(res.data))
    })
    .catch(err=>console.log(err))

    getCities()
    .then(res=>{
      
      dispatch(getCities_(res.data))
    })
    .catch(err=>console.log(err))
  };

  function getStreets_(data) {
    return {
      type: GET_STREETS,
      data: data
    };
  }
  function getDistricts_(data) {
    
    return {
      type: GET_DISTRICTS,
      data: data
    };
  }
  function getCities_(data) {
    return {
      type: GET_CITIES,
      data: data
    };
  }
};

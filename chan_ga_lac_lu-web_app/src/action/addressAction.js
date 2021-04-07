import { getCities, getDistricts, getStreets } from "../services/address.services";

export const GET_STREETS = "GET_STREETS";
export const GET_DISTRICTS = "GET_DISTRICTS";
export const GET_CITIES = "GET_CITIES";

export const initAddress = () => {
  return (dispatch) => {
    
    getStreets()
    .then(res=>{
      let result = []
      res.data.map(d =>{
        result = [...result,{
          id: d.street_id,
          value: d.street_name,
          district_id: d.district_id
        }]
      })
      dispatch(getStreets_(result))
    })
    .catch(err=>console.log(err))

    getDistricts()
    .then(res=>{
      let result = []
      res.data.map(d =>{
        result = [...result,{
          id: d.district_id,
          value: d.district_name
        }]
      })
      dispatch(getDistricts_(result))
    })
    .catch(err=>console.log(err))

    getCities()
    .then(res=>{
      let result = []
      res.data.map(d =>{
        result = [...result,{
          id: d.city_id,
          value: d.city_name
        }]
      })
      dispatch(getCities_(result))
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
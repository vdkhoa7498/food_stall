import { getCustomers } from "../services/customer.services";

export const GET_NAME = "GET_NAME";
export const GET_PHONE = "GET_PHONE";

export const initCustomer = () => {
  return (dispatch) => {
    
    getCustomers()
    .then(res=>{
      let resultName = []
      let resultPhone = []
      res.data.map(d =>{
        resultName = [...resultName,{
          id: d._id,
          value: d.customerName
        }]
        resultPhone = [...resultPhone,{
            id: d._id,
            value: d.customerPhone
          }]
      })
      dispatch(getCustomersName(resultName))
      dispatch(getCustomersPhone(resultPhone))
    })
    .catch(err=>console.log(err))
  };

  function getCustomersName(data) {
    return {
      type: GET_NAME,
      data: data
    };
  }
  function getCustomersPhone(data) {
    
    return {
      type: GET_PHONE,
      data: data
    };
  }
};


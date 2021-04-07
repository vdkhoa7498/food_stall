import { checkToPostCustomer } from "../services/customer.services";
import { AddNewOrder } from "../services/order.services";
import { AddNewOrdering } from "../services/ordering.services";

export const ADD_ORDER = "ADD_ORDER";
export const CHANGE_STATUS_ORDER= "CHANGE_STATUS_ORDER";


export const addOrder = (orderingList, note, total, customerInfo) => {
  return (dispatch) => {
    checkToPostCustomer(customerInfo.name, customerInfo.phone)
    .then(res=>{
      console.log(res)
      // AddNewOrder(res.data.customer_id, note, null, 'Chưa Duyệt', total)
      // .then(res=>{
      //   orderingList.map(order =>{
      //     AddNewOrdering(res.data.order_id, order.content, order.quantity, order.ordering_total)
      //     .then(res)
      //     .catch(err=>{console.log(err)})
      //   })
      // })
      // .catch(err=>{console.log(err)})
    })
    .catch(err=>console.log(err))

    // addOrder_(orderingList, note, total, customerInfo)
  };

  function addOrder_(orderingList, total, customerInfo) {
    return {
      type: ADD_ORDER,
      orderingList: [],
      total: 0,
      customerInfo: {},
      status: 'Chưa duyệt'
    };
  }
};

export const changeStatusOrder = (username, password) => {
  return (dispatch) => {
    
  };

  
  function changeStatusOrder_() {
    return {
      type: CHANGE_STATUS_ORDER,
    };
  }
};
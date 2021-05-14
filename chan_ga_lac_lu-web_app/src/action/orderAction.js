
import { addOrderEmit } from "../socketio/emit";
import { AddNewOrderService} from "../services/order.services"
import { addCustomer } from "../services/customer.services"
export const ADD_ORDER = "ADD_ORDER";
export const CHANGE_STATUS_ORDER= "CHANGE_STATUS_ORDER";
export const SET_ORDER = "SET_ORDER"

export const setOrderListAction = (orderList) => {
  
  return (dispatch) => {
    dispatch(setOrder(orderList))
  };

  function setOrder(orderList) {
    return {
      type: SET_ORDER,
      orderList: orderList,
    };
  }
};



// export const addOrderAction = (customerInfo, note, total, orderingList, customersPhone) => {
  
//   return (dispatch) => {

    
//   };

//   function addOrder(customerId, customerInfo, orderingList, note, total) {
//     return {
//       type: ADD_ORDER,
//       customerId: customerId, 
//       customerInfo: customerInfo, 
//       purchase: orderingList,
//       status: "Chưa duyệt",
//       shipper: "",
//       note: note, 
//       total: total, 
//     };
//   }
// };

export const changeStatusOrder = (orderId, status) => {
  return (dispatch) => {
    dispatch(changeStatusOrder_(orderId, status))
  };

  
  function changeStatusOrder_(orderId, status) {
    return {
      type: CHANGE_STATUS_ORDER,
      orderId: orderId,
      status: status
    };
  }
};

export const changeShipper = (orderId, shipper) => {
  return (dispatch) => {
    dispatch(changeStatusOrder_(orderId, shipper))
  };

  
  function changeStatusOrder_(orderId, shipper) {
    return {
      type: CHANGE_STATUS_ORDER,
      orderId: orderId,
      shipper: shipper
    };
  }
};
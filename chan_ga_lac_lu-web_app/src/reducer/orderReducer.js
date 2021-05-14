import {
    SET_ORDER,
    ADD_ORDER,
    CHANGE_STATUS_ORDER
  } from "../action/orderAction";
  
  const inititalState = {
    orderList: [],
    
  };
  
  const orderReducer = (state = inititalState, action) => {
    switch (action.type) {
      case SET_ORDER:
        return {
          ...state,
          orderList: action.orderList
          
        };
      case ADD_ORDER:
        return {
          ...state,
          // orderList: [...orderList,{
          //   orderId: action.orderId,
          //   customerName: action.customerName, 
          //   customerPhone: action.customerPhone, 
          //   customerAddressDetail: action.customerAddressDetail, 
          //   note: action.note, 
          //   total: action.total, 
          //   orderingList: action.orderingList,
          //   status: "Chưa duyệt"
          // }]
          
        };
      case CHANGE_STATUS_ORDER:
        // let index = state.orderList.findIndex(order=> order.orderId == action.orderId)
        // let result = state.orderList[index].status = action.status;
        return {
          ...state,
        };
      default:
        return state;
    }
  };
  
  export default orderReducer;
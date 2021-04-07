import {
    ADD_ORDER,
    CHANGE_STATUS_ORDER
  } from "../action/orderAction";
  
  const inititalState = {
    orderingList: [],
    total: 0,
    customerInfo: {},
    status: 'Chưa duyệt'
  };
  
  const reducer = (state = inititalState, action) => {
    switch (action.type) {
      case ADD_ORDER:
        return {
          ...state,
          orderingList = action.orderingList,
          total: action.total,
          customerInfo = action.customerInfo,
          status: action.status
        };
      case CHANGE_STATUS_ORDER:
        return {
          ...state,
          orderingList = action.orderingList,
          total: action.total,
          customerInfo = action.customerInfo,
          status: action.status
        };
      default:
        return state;
    }
  };
  
  export default reducer;
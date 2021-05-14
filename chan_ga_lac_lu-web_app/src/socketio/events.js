import {socket} from '.';
import { setOrderListAction} from '../action/orderAction'
import {myStore} from '../index'

export const socketEvents = ({value, setValue}) => {

  socket.on("receive-new-order", (data) => {
  });

  socket.on("receive-current-orders", (data) => {
    myStore.dispatch(setOrderListAction(data))
  });

  socket.on("receive-current-orders-status", (data) =>{
    console.log('change status',data)
  })

};

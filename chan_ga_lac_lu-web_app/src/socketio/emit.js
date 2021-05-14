import { socket } from ".";
import { addCustomer } from "../services/customer.services"

export const addOrderEmit = (customerInfo, note, total, orderingList, customersPhone) => {
    let customerId = ""
    const customer = customersPhone.find(item => item.value === customerInfo.customerPhone)
    if(customer){
        customerId = customer.id
    }
    else{
        addCustomer(customerInfo.customerName, customerInfo.customerPhone, "", customerInfo.customerAddress)
        .then(res=>{
        customerId = res.data._id;
        })
    }
    const data = {
        customerId: customerId, 
        customerInfo: customerInfo, 
        purchase: orderingList,
        status: "Chưa duyệt",
        shipper: "",
        note: note, 
        total: total, 
      }
    // AddNewOrderService(customerId, customerInfo, orderingList, note, total)
    // .catch(err => console.log(err))
    socket.emit("send-new-order", data);
}

export const initDataEmit = (data) =>{
    socket.emit("init-data")
}

export const changeOrderStatusEmit = (orderId, status) =>{
    socket.emit("change-order-status", {orderId: orderId, status: status})
}
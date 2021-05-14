import axios from '../utils/axios'


export const AddNewOrderService = (customerId,customerInfo,orderingList,note, total)=>{
    return(
        axios.post(`/orders`,
        customerId,
        customerInfo,
        orderingList,
        note, 
        total,
        )
    )
}
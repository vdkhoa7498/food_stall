import axios from '../utils/axios'


export const AddNewOrder = (customer_id, note, shipper, status, total)=>{
    return(
        axios.post(`/orders`,
            customer_id, 
            note, 
            shipper, 
            status, 
            total
        )
    )
}
import axios from '../utils/axios'


export const AddNewOrdering = (order_id, content, quantity, ordering_total)=>{
    return(
        axios.post(`/orderings`,
        order_id,
        content, 
        quantity, 
        ordering_total
        )
    )
}
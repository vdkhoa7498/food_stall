import axios from '../utils/axios'

//streets

export const getCustomers = () =>{
    return axios.get('/customers')
}

export const checkToPostCustomer = (name, phone) =>{
    return axios.post('/customers/check-to-post', name, phone)
}
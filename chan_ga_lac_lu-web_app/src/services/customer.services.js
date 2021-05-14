import axios from '../utils/axios'

export const getCustomers = () =>{
    return axios.get('/customers')
}

export const getCustomerById = (id) =>{
    return axios.get(`/customers/${id}`)
}

export const addCustomer = (customerName, customerPhone, facebookId, customerAddress) =>{
    return axios.post(`/customers`,{
        customerName, 
        customerPhone, 
        facebookId, 
        customerAddress
    })
}
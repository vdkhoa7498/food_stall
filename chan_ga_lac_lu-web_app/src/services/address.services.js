import axios from '../utils/axios'

//streets

export const getStreets = () =>{
    return axios.get('/streets')
}

//district

export const getDistricts = () =>{
    return axios.get('/districts')
}

//cities

export const getCities = () =>{
    return axios.get('/cities')
}

// address

export const getAddressById = (id) =>{
    return axios.get(`/cities/:${id}`)
}
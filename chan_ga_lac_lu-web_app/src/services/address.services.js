import axios from '../utils/axios'

//streets

export const getStreets = () =>{
    return axios.get('/streets')
}

export const getStreetById = (id) =>{
    return axios.get(`/streets/:${id}`)
}

//district

export const getDistricts = () =>{
    return axios.get('/districts')
}

export const getDistrictById = (id) =>{
    return axios.get(`/districts/:${id}`)
}

//cities

export const getCities = () =>{
    return axios.get('/cities')
}

export const getCityById = (id) =>{
    return axios.get(`/cities/:${id}`)
}

// address

export const getAddressById = (id) =>{
    return axios.get(`/addresses/:${id}`)
}

export const addAddress = (detail, street_id, district_id, city_id) =>{
    return axios.post(`/addresses`,{
        detail, 
        street_id, 
        district_id, 
        city_id
    })
}
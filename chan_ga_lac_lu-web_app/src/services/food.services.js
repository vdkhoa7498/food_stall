import axios from '../utils/axios'

export const getFoods = ()=>{
    return(
        axios.get('/foods')
    )
}

export const getFoodsByType = (type)=>{
    return(
        axios.get(`/foods/byType?type=${type}`)
    )
}
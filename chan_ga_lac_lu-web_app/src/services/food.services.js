import axios from '../utils/axios'

//Main Food
export const getMainFoods = ()=>{
    return(
        axios.get(`/main-foods`)
    )
}

export const addMainFood = (foodName)=>{
    return(
        axios.post(`/main-foods/`,{
            foodName
        })
    )
}

export const editMainFoodById = (foodId, foodName)=>{
    return(
        axios.put(`/main-foods/${foodId}`,{
            foodName
        })
    )
}

export const deleteMainFoodById = (foodId)=>{
    return(
        axios.delete(`/main-foods/${foodId}`)
    )
}


//Snack Food
export const getSnackFoods = ()=>{
    return(
        axios.get(`snack-foods`)
    )
}

export const addSnackFood = (foodName, price)=>{
    return(
        axios.post(`/snack-foods/`,{
            foodName,
            price
        })
    )
}

export const editSnackFoodById = (foodId, foodName, price)=>{
    return(
        axios.put(`/snack-foods/${foodId}`,{
            foodName,
            price
        })
    )
}

export const deleteSnackFoodById = (foodId)=>{
    return(
        axios.delete(`/snack-foods/${foodId}`)
    )
}
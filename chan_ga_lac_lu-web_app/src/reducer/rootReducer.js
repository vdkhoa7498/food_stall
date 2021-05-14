import { combineReducers } from "redux";
import {streetsReducer, districtsReducer, citiesReducer} from './addressReducer'
import {
    customersNameReducer, 
    customersPhoneReducer,
} from './customerReducer'
import orderReducer from './orderReducer'


const rootReducer = combineReducers({
    streetsReducer, 
    districtsReducer, 
    citiesReducer,
    customersNameReducer, 
    customersPhoneReducer,
    orderReducer,
});

export default rootReducer;
import { combineReducers } from "redux";
import {streetsReducer, districtsReducer, citiesReducer} from './addressReducer'
import {customersNameReducer, customersPhoneReducer} from './customerReducer'


const rootReducer = combineReducers({
    streetsReducer, 
    districtsReducer, 
    citiesReducer,
    customersNameReducer, 
    customersPhoneReducer
});

export default rootReducer;
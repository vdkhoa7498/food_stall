import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import homeReducer from './home/reducer';
import authReducer from "./auth/reducer";
import stickerReducer from "./sticker/reducer";

export default (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
})
import Axios from "axios";
import {SERVER_IP} from '../config/index'
let axios = Axios.create({
  baseURL: `${SERVER_IP}`,
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  //get token
  let token = JSON.parse(localStorage.getItem("token"));
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default axios;
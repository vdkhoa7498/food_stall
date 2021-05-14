import axios from '../utils/axios'

export function loginAPI({username, password}) {
    return axios.post("/auth/login", {
        username,
        password,
    });
  }

export function registerAPI({email, username, password, fullName, phone, role}) {
    return axios.post("/auth/register", {
        email, username, password, fullName, phone, role
    });
}

export function getProfileAPI() {
    return axios.get("/auth/me");
}
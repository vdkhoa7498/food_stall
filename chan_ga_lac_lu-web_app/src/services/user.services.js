import axios from '../utils/axios'


export const Login = (username, password)=>{
    return(
        axios.post(`/user/login`,
        username,
        password,
        )
    )
}
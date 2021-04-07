import { message} from 'antd';
import { Login } from '../services/user.services';

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const loginAction = (username, password) => {
  return (dispatch) => {
    dispatch(request());
    Login(username, password)
      .then((res) => {
        localStorage.setItem(
          "token",
          JSON.stringify(res.data.access_token)
        );
        dispatch(success(res.data.user_id, res.data.fullName, res.data.phone, res.data.facebookId, res.data.role));
        message.success('Đăng nhập thành công');
        window.location.href = "/dashBoard";
      })
      .catch((err) => {
        console.log("err", err.response);
        dispatch(failure());
        if (err.response.status == 401) {
            message.error('Đăng nhập thấp bại. Thông tin không chính xác!');
          
        } else {
            message.error('Có lỗi trong quá trình đăng nhập');
        }
      });
  };

  function request() {
    return {
      type: LOG_IN_REQUEST
    };
  }
  function success(user_id, fullName, phone, facebookId, role) {
    return {
      type: LOG_IN_SUCCESS,
      userInfo: {
        user_id: user_id,
        fullName: fullName,
        phone: phone,
        facebookId: facebookId,
        role: role
      }
    };
  }
  function failure() {
    return {
      type: LOG_IN_FAILURE,
    };
  }
};

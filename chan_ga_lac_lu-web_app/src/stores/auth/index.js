import { setAuthLoading, setAuthMessage, setProfile, toggleGlobalLoading, clearProfile, setIsLoggedIn } from './action';
import { loginAPI, registerAPI, getProfileAPI} from '../../services/user.services'

export function login({
  form,
  onSuccess,
  onFailure
}) {
  return async (dispatch) => {
    try {
      dispatch(clearAuthMessage());
      dispatch(setAuthLoading(true));
      const result = await loginAPI(form);
      dispatch(setProfile(result.data.user));
      dispatch(setIsLoggedIn(true));
      localStorage.setItem('token', result.data.token.access_token);
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
      
      onSuccess(result.data);
      dispatch(setAuthLoading(false));
    } catch (error) {
      dispatch(setAuthLoading(false));
      dispatch(setAuthMessage(error.message || error))
      onFailure(error);
    }
  }
}

export function register({
  form,
  onSuccess,
  onFailure
}) {
  return async (dispatch) => {
    try {
      dispatch(setAuthLoading(true))
      const result = await registerAPI(form);
      onSuccess(result);
      dispatch(setAuthLoading(false));
    } catch (error) {
      dispatch(setAuthMessage(error.message || error))
      dispatch(setAuthLoading(false));
      onFailure(error);
    }
  }
}
export function clearAuthMessage() {
  return (dispatch) => {
    dispatch(setAuthMessage(''));
  }
}

export function getProfile({
  onSuccess,
  onFailure
}) {
  return async (dispatch) => {
    // dispatch(toggleGlobalLoading(true));
    try {
      const result = await getProfileAPI();
      dispatch(setProfile(result.data));
      dispatch(toggleGlobalLoading(false));
      dispatch(setIsLoggedIn(true));
      onSuccess(result.data);
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('isAuthenticated')
      onFailure(error);
      toggleGlobalLoading(false);
    }
  }
}

export function logout({
  onSuccess,
  onFailure
}) {
  return async (dispatch) => {
    try {
      dispatch(clearProfile());
      localStorage.removeItem('token');
      localStorage.removeItem('isAuthenticated')
      onSuccess()
    } catch (error) {
      onFailure(error);
    }
  }
}

// export function changePassword({
//   form,
//   onSuccess,
//   onFailure
// }) {
//   return async (dispatch) => {
//     try {
//       dispatch(clearAuthMessage());
//       const result = await qrHttpClient.user.changePassword(form);
//       if (result){
//         onSuccess()
//       }
//     } catch (error) {
//       dispatch(setAuthMessage(error.message || error))
//       onFailure(error);
//     }
//   }
// }
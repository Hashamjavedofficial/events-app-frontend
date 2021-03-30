import * as actionTypes from "../ActionTypes";
import axios from "../../utils/axios";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
const authSuccess = (user, token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    user,
    token,
  };
};
const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};
export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authLogin = (authData, signUp) => {
  return (dispatch) => {
    dispatch(authStart());
    let address;
    if (signUp) {
      address = `users/create`;
    } else {
      address = `users/login`;
    }
    axios
      .post(address, authData)
      .then((response) => {
        localStorage.setItem("user", response.data.data);
        localStorage.setItem("token", response.data.data.token);
        debugger;
        dispatch(authSuccess(response.data.data, response.data.data.token));
      })
      .catch((err) => {
        dispatch(authFail(err.message));
      });
  };
};
export const authRedirectPath = (path) => {
  return {
    type: actionTypes.AUTH_REDIRECT_PATH,
    path: path,
  };
};

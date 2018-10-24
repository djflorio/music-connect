import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  UPDATE_REGISTER_ERRORS,
  UPDATE_LOGIN_ERRORS,
  SET_CURRENT_USER
} from "./types";

// Register user
export const registerUser = (userData, history) => {
  return dispatch => {
    axios
      .post("/api/users/register", userData)
      .then(() => history.push("/login"))
      .catch(err => {
        dispatch({ type: UPDATE_REGISTER_ERRORS, payload: err.response.data });
      });
  };
};

// Login - Get user token
export const loginUser = userData => {
  return dispatch => {
    axios
      .post("/api/users/login", userData)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
          type: UPDATE_LOGIN_ERRORS,
          payload: err.response.data
        })
      );
  };
};

// Set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
});

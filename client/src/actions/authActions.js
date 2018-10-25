import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  UPDATE_REGISTER_ERRORS,
  UPDATE_LOGIN_ERRORS,
  SET_CURRENT_USER
} from "./types";

export const updateRegisterErrors = errors => ({
  type: UPDATE_REGISTER_ERRORS,
  payload: errors
});

export const updateLoginErrors = errors => ({
  type: UPDATE_LOGIN_ERRORS,
  payload: errors
});

// Register user
export const registerUser = (userData, history) => {
  return dispatch => {
    axios
      .post("/api/users/register", userData)
      .then(() => history.push("/login"))
      .catch(err => {
        dispatch(updateRegisterErrors(err.response.data));
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
      .catch(err => {
        dispatch(updateLoginErrors(err.response.data));
      });
  };
};

// Set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
});

// Log user out
export const logoutUser = () => {
  return dispatch => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will also set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };
};

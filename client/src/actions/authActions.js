import axios from "axios";

import { UPDATE_REGISTER_ERRORS } from "./types";

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

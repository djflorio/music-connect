import axios from 'axios';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  UPDATE_CREATE_PROFILE_ERRORS
} from './types';

// Get current profile
export const getCurrentProfile = () => {
  return dispatch => {
    dispatch(setProfileLoading());
    axios
      .get('/api/profile')
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_PROFILE,
          payload: {}
        })
      );
  };
};

// Create profile
export const createProfile = (profileData, history) => {
  return dispatch => {
    axios
      .post('/api/profile', profileData)
      .then(res => history.push('/dashboard'))
      .catch(err =>
        dispatch({
          type: UPDATE_CREATE_PROFILE_ERRORS,
          payload: err.response.data
        })
      );
  };
};

// Profile loading
export const setProfileLoading = () => ({
  type: PROFILE_LOADING
});

// Clear profile
export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE
});

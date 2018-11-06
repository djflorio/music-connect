import axios from 'axios';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  UPDATE_CREATE_PROFILE_ERRORS,
  SET_CURRENT_USER,
  UPDATE_DELETE_ACCOUNT_ERRORS
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

// Delete account and profile
export const deleteAccount = () => {
  return dispatch => {
    if (window.confirm('Are you sure? This cannot be undone.')) {
      axios
        .delete('/api/profile')
        .then(res =>
          dispatch({
            type: SET_CURRENT_USER,
            payload: {}
          })
        )
        .catch(err =>
          dispatch({
            type: UPDATE_DELETE_ACCOUNT_ERRORS,
            payload: err.response.data
          })
        );
    }
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

import {
  UPDATE_REGISTER_ERRORS,
  UPDATE_LOGIN_ERRORS,
  UPDATE_CREATE_PROFILE_ERRORS,
  UPDATE_DELETE_ACCOUNT_ERRORS
} from '../actions/types';

const initialState = {
  register: {},
  login: {},
  createProfile: {}
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REGISTER_ERRORS:
      return {
        ...state,
        register: action.payload
      };
    case UPDATE_LOGIN_ERRORS:
      return {
        ...state,
        login: action.payload
      };
    case UPDATE_CREATE_PROFILE_ERRORS:
      return {
        ...state,
        createProfile: action.payload
      };
    case UPDATE_DELETE_ACCOUNT_ERRORS:
      return {
        ...state,
        deleteAccount: action.payload
      };
    default:
      return state;
  }
};

export default errorsReducer;

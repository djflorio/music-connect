import { UPDATE_REGISTER_ERRORS, UPDATE_LOGIN_ERRORS } from '../actions/types';

const initialState = {
  register: {},
  login: {},
  profile: {}
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
    default:
      return state;
  }
};

export default errorsReducer;

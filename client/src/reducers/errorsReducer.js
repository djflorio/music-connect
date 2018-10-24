import { UPDATE_REGISTER_ERRORS } from "../actions/types";

const initialState = {
  register: {},
  login: {}
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REGISTER_ERRORS:
      return {
        ...state,
        register: action.payload
      };
    default:
      return state;
  }
};

export default errorsReducer;

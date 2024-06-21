import actions from "../../actions";
import { combineReducers } from "redux";

const {
  LOGIN,
  LOGIN_DONE,
  FORGET_PASSWORD,
  RESET_PASSWORD,
  FORGET_PASSWORD_DONE,
  RESET_PASSWORD_DONE,
  CLEAR_RESET_PASSWORD_RESPONSE,
  CLEAR_LOGIN_RESPONSE,
  EDIT_PROFILE,
  EDIT_PROFILE_DONE,
  CLEAR_FORGET_PASSWORD_RESPONSE,
} = actions;

export const loginReducer = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGIN_DONE:
      return false;
    default:
      return state;
  }
};
export const loginDoneReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_DONE:
      return action.response;
    case CLEAR_LOGIN_RESPONSE:
      return [];
    default:
      return state;
  }
};

export const forgetPasswordReducer = (state = false, action) => {
  switch (action.type) {
    case FORGET_PASSWORD:
      return true;
    case FORGET_PASSWORD_DONE:
      return false;
    default:
      return state;
  }
};
export const forgetPasswordDoneReducer = (state = [], action) => {
  switch (action.type) {
    case FORGET_PASSWORD_DONE:
      return action.response;
    case CLEAR_FORGET_PASSWORD_RESPONSE:
      return [];
    default:
      return state;
  }
};

export const resetPasswordReducer = (state = false, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return true;
    case RESET_PASSWORD_DONE:
      return false;
    default:
      return state;
  }
};
export const resetPasswordDoneReducer = (state = [], action) => {
  switch (action.type) {
    case RESET_PASSWORD_DONE:
      return action.response;
    case CLEAR_RESET_PASSWORD_RESPONSE:
      return [];
    default:
      return state;
  }
};

export const editProfileReducer = (state = false, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      return true;
    case EDIT_PROFILE_DONE:
      return false;
    default:
      return state;
  }
};
export const editProfileDoneReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_PROFILE_DONE:
      return action.response;

    default:
      return state;
  }
};

export default combineReducers({
  loginDoneReducer,
  loginReducer,
  resetPasswordDoneReducer,
  resetPasswordReducer,
  forgetPasswordDoneReducer,
  forgetPasswordReducer,
  editProfileReducer,
  editProfileDoneReducer,
});

import actions from "../../actions";
import { combineReducers } from "redux";
const { NEW_CONTACT, ADDED_CONTACT, CLEAR } = actions;
export const contactNew = (state = false, action) => {
  switch (action.type) {
    case NEW_CONTACT:
      return true;
    case ADDED_CONTACT:
      return false;
    default:
      return state;
  }
};
export const addedContact = (state = false, action) => {
  switch (action.type) {
    case ADDED_CONTACT:
      return action.response;
    case CLEAR:
      return false;
    default:
      return state;
  }
};
export default combineReducers({
  contactNew,
  addedContact,
});

import actions from "../../actions";
import { combineReducers } from "redux";
const { HOME_LOADED } = actions;
export const homeLoaded = (state = false, action) => {
  if (action.type == "HOME_LOADED") {
    /* alert("stop idiot"); */
  }
  switch (action.type) {
    case HOME_LOADED:
      return action.homeLoaded;
    default:
      return state;
  }
};
export default combineReducers({
  homeLoaded,
});

import actions from "../../actions";
import { combineReducers } from "redux";

const { CLEAR_FILTER, FILTER_POSTS_RETURNED, FILTER_POSTS } = actions;

export const filterPosts = (state = false, action) => {
  switch (action.type) {
    case FILTER_POSTS:
      return true;
    case FILTER_POSTS_RETURNED:
      return false;
    default:
      return state;
  }
};
export const filterPostsReturned = (state = [], action) => {
  switch (action.type) {
    case FILTER_POSTS_RETURNED:
      return {
        ...state,
        data: action?.data,
        count: action.data.count,
      };

    case CLEAR_FILTER:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  filterPostsReturned,
  filterPosts,
});

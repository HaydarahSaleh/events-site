import actions from "../../actions";
import { combineReducers } from "redux";

const {
  CLEAR_RESULTS,
  GET_RESULTS,
  GET_RESULTS_RETURNED,
  GET_SUGGESTIONS,
  GET_SUGGESTIONS_RETURNED,
} = actions;

export const getResults = (state = false, action) => {
  switch (action.type) {
    case GET_RESULTS:
      // return true;
      return action?.data?.spinner === "none" ? false : true;
    case GET_RESULTS_RETURNED:
      return false;
    default:
      return state;
  }
};
export const getResultsReturned = (state = [], action) => {
  switch (action.type) {
    case GET_RESULTS_RETURNED:
      return {
        searchResult: action.data?.result,
        count: action.data.count,
        searchWord: action?.searchWord,
      };

    case CLEAR_RESULTS:
      return [];
    default:
      return state;
  }
};

export const getSuggestions = (state = false, action) => {
  switch (action.type) {
    case GET_SUGGESTIONS:
      return true;
    // return action?.data?.spinner === "none" ? false : true;
    case GET_SUGGESTIONS_RETURNED:
      return false;
    default:
      return state;
  }
};
export const getSuggestionsReturned = (state = [], action) => {
  switch (action.type) {
    case GET_SUGGESTIONS_RETURNED:
      return {
        searchSuggestions: action.data?.result,
        count: action.data.count,
      };

    default:
      return state;
  }
};

export default combineReducers({
  getResultsReturned,
  getResults,
  getSuggestionsReturned,
  getSuggestions,
});

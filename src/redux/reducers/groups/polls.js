import actions from "../../actions";
import { combineReducers } from "redux";

const {
  CLEAR_POLL,
  SUBMIT_POLL,
  SUBMIT_POLL_DONE,
  GET_ANSWERS_BY_ID,
  ANSWERS_BY_ID_RETURNED,
} = actions;

export const submitPollsReducer = (state = false, action) => {
  switch (action.type) {
    case SUBMIT_POLL:
      return true;
    case SUBMIT_POLL_DONE:
      return false;
    default:
      return state;
  }
};
export const submitPollsDoneReducer = (state = [], action) => {
  switch (action.type) {
    case SUBMIT_POLL_DONE:
      return action.response;
    case CLEAR_POLL:
      return [];
    default:
      return state;
  }
};

export const getSurveyAnswers = (state = false, action) => {
  switch (action.type) {
    case GET_ANSWERS_BY_ID:
      return true;
    case ANSWERS_BY_ID_RETURNED:
      return false;
    default:
      return state;
  }
};
export const surveyAnswersReturned = (state = false, action) => {
  switch (action.type) {
    case ANSWERS_BY_ID_RETURNED:
      return action.data;
    default:
      return state;
  }
};
export default combineReducers({
  surveyAnswersReturned,
  getSurveyAnswers,
  submitPollsDoneReducer,
  submitPollsReducer,
});

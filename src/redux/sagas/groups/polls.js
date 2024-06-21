import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import actions from "../../actions";
import { submitSurvey, getSurveyAnswers } from "../../network/polls";
const { SUBMIT_POLL, submitPollDone, GET_ANSWERS_BY_ID, answersByIdReturned } =
  actions;

function* performSubmitPoll(action) {
  try {
    let data = action.payload;
    let result = [];
    result = yield call(submitSurvey, data);
    if (result?.data?.success) {
      yield put(submitPollDone({ response: result.data }));
    } else {
      yield put(submitPollDone({ response: result.data }));
    }
  } catch (e) {
    yield put(submitPollDone({ response: "" }));
    return;
  }
}

export function* watchSubmitPoll() {
  yield takeEvery(SUBMIT_POLL, performSubmitPoll);
}

function* performGetSurveyAnswers(action) {
  try {
    const { id } = action;
    const result = yield call(getSurveyAnswers, id);
    result.res["id"] = id;
    if (result) yield put(answersByIdReturned({ data: result.res }));
    else yield put(answersByIdReturned({ data: [] }));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetSurveyAnswwers() {
  yield takeEvery(GET_ANSWERS_BY_ID, performGetSurveyAnswers);
}

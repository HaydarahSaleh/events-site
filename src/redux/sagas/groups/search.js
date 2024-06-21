import { call, put, takeEvery } from "redux-saga/effects";
import actions from "../../actions";
import { getResults } from "../../network/search";
const {
  GET_RESULTS,
  getResultsReturned,
  GET_SUGGESTIONS,
  getSuggestionsReturned,
} = actions;

function* performGetSearchResults(action) {
  try {
    let sort = action.sort;
    let data = action.data;
    const result = yield call(getResults, data, sort);
    if (result && result?.res?.success) {
      yield put(
        getResultsReturned({
          data: result.res,
          searchWord: data?.searchWord,
          sort,
        })
      );
    } else {
      yield put(getResultsReturned({ data: [] }));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetResults() {
  yield takeEvery(GET_RESULTS, performGetSearchResults);
}

function* performGetSearchSuggestions(action) {
  try {
    let sort = action.sort;
    let subSort = action?.data?.type;
    let data = action.data;

    const result = yield call(getResults, data, sort);
    if (result && result.res.success) {
      yield put(getSuggestionsReturned({ data: result.res, sort, subSort }));
    } else {
      yield put(getSuggestionsReturned({ data: [] }));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetSearchSuggestions() {
  yield takeEvery(GET_SUGGESTIONS, performGetSearchSuggestions);
}

import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import actions from "../../actions";
import { createNew } from "../../network/crud";
const { NEW_CONTACT, addedContact } = actions;
function* performContactUs(action) {
  try {
    let data = action.payload;
    let sort = action.sort;
    let result = [];
    result = yield call(createNew, sort, data);
    if (result?.data?.success) {
      yield put(addedContact({ response: { ...result.data, sort: sort } }));
    } else {
      yield put(addedContact({ response: { ...result.data, sort: sort } }));
    }
  } catch (e) {
    yield put(addedContact({ response: "" }));
    return;
  }
}

export function* watchContactUs() {
  yield takeEvery(NEW_CONTACT, performContactUs);
}

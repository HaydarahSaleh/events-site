import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import actions from "../../actions";
import { filterPosts } from "../../network/filterPosts";
const { FILTER_POSTS, filterPostsReturned } = actions;

function* performFilterPosts(action) {
  try {
    let sort = action.sort;
    let subSort = action?.data?.type;
    let data = action.data;
    const result = yield call(filterPosts, data, sort);
    if (result && result.res.success) {
      yield put(filterPostsReturned({ data: result.res, sort, subSort }));
    } else {
      yield put(filterPostsReturned({ data: [] }));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchFilterPosts() {
  yield takeEvery(FILTER_POSTS, performFilterPosts);
}

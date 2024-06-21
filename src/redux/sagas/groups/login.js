import { call, put, takeEvery } from "redux-saga/effects";
import actions from "../../actions";
import {
  login,
  forgetPassword,
  resetPassword,
  editProfile,
} from "../../network/login";
const {
  LOGIN,
  loginDone,
  resetPasswordDone,
  RESET_PASSWORD,
  FORGET_PASSWORD,
  forgetPasswordDone,
  EDIT_PROFILE,
  editProfileDone,
} = actions;

function* performLogin(action) {
  try {
    let data = action.payload;
    let result = [];
    result = yield call(login, data);
    if (result?.data?.success) {
      yield put(loginDone({ response: result.data }));
    } else {
      yield put(loginDone({ response: result.data }));
    }
  } catch (e) {
    yield put(loginDone({ response: "" }));
    return;
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, performLogin);
}

function* performForgetPassword(action) {
  try {
    let data = action.payload;
    let result = [];
    result = yield call(forgetPassword, data);
    if (result?.data?.success) {
      yield put(forgetPasswordDone({ response: result.data }));
    } else {
      yield put(forgetPasswordDone({ response: result.data }));
    }
  } catch (e) {
    yield put(forgetPasswordDone({ response: "" }));
    return;
  }
}

export function* watchForgetPassword() {
  yield takeEvery(FORGET_PASSWORD, performForgetPassword);
}

function* performResetPassword(action) {
  try {
    let data = action.payload;
    let result = [];
    result = yield call(resetPassword, data);
    if (result?.data?.success) {
      yield put(resetPasswordDone({ response: result.data }));
    } else {
      yield put(resetPasswordDone({ response: result.data }));
    }
  } catch (e) {
    yield put(resetPasswordDone({ response: "" }));
    return;
  }
}

export function* watchResetPassword() {
  yield takeEvery(RESET_PASSWORD, performResetPassword);
}

function* performEditProfile(action) {
  try {
    let data = action.payload;

    let result = [];
    result = yield call(editProfile, data, action.token, action.language);
    if (result?.data?.success) {
      yield put(editProfileDone({ response: result.data }));
    } else {
      yield put(editProfileDone({ response: result.data }));
    }
  } catch (e) {
    yield put(editProfileDone({ response: "" }));
    return;
  }
}

export function* watchEditProfile() {
  yield takeEvery(EDIT_PROFILE, performEditProfile);
}

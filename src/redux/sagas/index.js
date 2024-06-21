import { fork } from "redux-saga/effects";
import * as crudSagas from "./groups/crud";
import * as pollsSagas from "./groups/polls";
import * as files from "./groups/file";
import * as surveySagas from "./groups/survey";
import * as contactUsSagas from "./groups/contactUs";
import * as filterPostsSagas from "./groups/filterPosts";
import * as searchSagas from "./groups/search";
import * as loginSagas from "./groups/login";

const sagas = Object.values({
  ...crudSagas,
  ...files,
  ...pollsSagas,
  ...surveySagas,
  ...contactUsSagas,
  ...filterPostsSagas,
  ...searchSagas,
  ...loginSagas,
});

export default function* rootSaga(getState) {
  for (let index = 0; index < sagas.length; index++) {
    yield fork(sagas[index]);
  }
}

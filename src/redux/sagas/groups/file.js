import { put, call, takeEvery, takeLatest, all } from "redux-saga/effects";
import {
  uploadFile,
  createFile,
  deleteFile,
  readFileAction,
  downloadCountAction,
  downloadFile,
} from "../../network/file";

import actions from "../../actions";
const {
  UPLOAD_FILE,
  fileCreated,
  DELETE_FILE_ACTION,
  fileDeleted,
  READ_FILE_ACTION,
  readCompleted,
  DOWNLOAD_COUNT_ACTION,
  downloadCountCompleted,
  DOWNLOAD_FILE,
  fileDownloaded,
} = actions;

function* performUploadFile(action) {
  try {
    var formData = new FormData();
    const data = action.files;

    data.map((file) => formData.append("files", file));

    const result = yield call(uploadFile, formData);

    if (result.data.success) {
      const filesDetails = [];

      result.data.files.map((file) =>
        filesDetails.push({
          uuid: file.filename,
          publishMode: 1,
          acl: 1,
          extension: file.originalname.split(".").pop(),
          title: {
            ar: file.originalname ? file.originalname : file?.name,
            en: file.originalname ? file.originalname : file?.name,
          },
          ...file,
        })
      );

      const createdFile = yield call(createFile, filesDetails);

      const response = createdFile.data.files;

      if (createdFile) yield put(fileCreated({ response }));
      else yield put(fileCreated({ response: [] }));
    } else {
      yield put(fileCreated({ response: result }));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchUploadFile() {
  yield takeEvery(UPLOAD_FILE, performUploadFile);
}

function* performDeleteFileById(action) {
  try {
    const result = yield call(deleteFile, action.id);

    if (result) yield put(fileDeleted({ response: result.data }));
    else yield put(fileDeleted({ response: [] }));
  } catch (error) {
    console.error(error);
  }
}
export function* watchDeleteFileById() {
  yield takeLatest(DELETE_FILE_ACTION, performDeleteFileById);
}

function* performReadFile(action) {
  try {
    const result = yield call(readFileAction, action.id);

    if (result) yield put(readCompleted({ response: result.data }));
    else yield put(readCompleted({ response: {} }));
  } catch (error) {
    console.error(error);
  }
}
export function* watchReadCompleted() {
  yield takeLatest(READ_FILE_ACTION, performReadFile);
}

function* performDownloadFileCounter(action) {
  try {
    const result = yield call(downloadCountAction, action.id);
    if (result) yield put(downloadCountCompleted({ response: result.data }));
    else yield put(downloadCountCompleted({ response: {} }));
  } catch (error) {
    console.error(error);
  }
}
export function* watchDownloadCompleted() {
  yield takeLatest(DOWNLOAD_COUNT_ACTION, performDownloadFileCounter);
}

function* performDownloadFile(action) {
  try {
    if (action.payload.files) {
      let files = action.payload.files;
      let fullDataFiles = yield all(
        files &&
          files.map(async (file) => ({
            ...file,
            binaryData: await downloadFile(file.uuid),
          }))
      );
      yield put(fileDownloaded({ response: fullDataFiles }));
    } else if (action.payload.item) {
      let data = action.payload.item.uuid;
      const result = yield call(downloadFile, data);
      yield put(fileDownloaded({ response: result }));
    }
  } catch (error) {
    yield put(fileDownloaded({ response: [] }));
  }
}
export function* watchDownloadFile() {
  yield takeLatest(DOWNLOAD_FILE, performDownloadFile);
}

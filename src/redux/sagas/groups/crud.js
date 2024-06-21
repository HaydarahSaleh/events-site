import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import actions from "../../actions";
import {
  askingForRate,
  createNew,
  fetchPageInfo,
  getAll,
  getByAlias,
  getById,
  getData,
  getDataAchivments,
  getDataPartners,
  getDataServices,
  getDataSlider,
  deleteItem,
  submitComment,
  getDataMenus,
  getDataConf,
} from "../../network/crud";
import { uploadFile, createFile } from "../../network/file";
import * as selectors from "../selectors";
const {
  GET_ALL,
  allReturned,
  GET_BY_ID,
  byIdReturned,
  GET_BY_ALIAS,
  byAliasReturned,
  SUBMIT_COMMENT,
  submitCommentReturned,
  GET_DATA,
  dataReturned,
  GET_DATA_SLIDER,
  dataSliderReturned,
  GET_DATA_ACHIVMENTS,
  dataAchivmentsReturned,
  GET_DATA_SERVICES,
  dataServicesReturned,
  GET_PAGE_DETAILS,
  pageDetailsReturned,
  GET_DATA_PARTNERS,
  dataPartnersReturned,
  ASK_FOR_RATE,
  askForRateReturned,
  fileUploaded,
  CREATE_NEW,
  created,
  GET_NOTIFICATIONS,
  allNotificationsReturned,
  GET_DATA_CONF,
  dataConfReturned,
  GET_DATA_MENUS,
  dataMenusReturned,
} = actions;

function* performGetAll(action) {
  try {
    let sort = action.sort;
    let subSort = action?.data?.type;
    let data = action.data;
    const result = yield call(getAll, data, sort);
    if (result && result.res.success) {
      yield put(allReturned({ data: result.res, sort, subSort }));
    } else {
      yield put(allReturned({ data: [] }));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetAll() {
  yield takeEvery(GET_ALL, performGetAll);
}

function* performGetData(action) {
  try {
    let sort = action.sort;
    // let subSort = action.subSort;

    let data = action.data;
    const result = yield call(getData, data, sort);
    if (result && result?.res?.success) {
      yield put(
        dataReturned({ data: result.res, sort, dataObject: data?.dataObject })
      );
    } else {
      yield put(dataReturned({ data: [] }));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetData() {
  yield takeEvery(GET_DATA, performGetData);
}

function* performGetConf(action) {
  try {
    let sort = action.sort;
    // let subSort = action.subSort;

    let data = action.data;
    const result = yield call(getDataConf, data, sort);
    if (result && result.res.success) {
      yield put(dataConfReturned({ data: result.res, sort }));
    } else {
      yield put(dataConfReturned({ data: [] }));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetConf() {
  yield takeEvery(GET_DATA_CONF, performGetConf);
}

function* performGetMenus(action) {
  try {
    let sort = action.sort;
    // let subSort = action.subSort;

    let data = action.data;
    const result = yield call(getDataMenus, data, sort);
    if (result && result.res.success) {
      yield put(dataMenusReturned({ data: result.res, sort }));
    } else {
      yield put(dataMenusReturned({ data: [] }));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetMenus() {
  yield takeEvery(GET_DATA_MENUS, performGetMenus);
}

function* performGetAchivments(action) {
  try {
    let sort = action.sort;
    // let subSort = action.subSort;

    let data = action.data;
    const result = yield call(getDataAchivments, data, sort);
    if (result && result.res.success) {
      yield put(dataAchivmentsReturned({ data: result.res, sort }));
    } else {
      yield put(dataAchivmentsReturned({ data: [] }));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetAchivments() {
  yield takeEvery(GET_DATA_ACHIVMENTS, performGetAchivments);
}

function* performGetServices(action) {
  try {
    let sort = action.sort;
    // let subSort = action.subSort;

    let data = action.data;
    const result = yield call(getDataServices, data, sort);
    if (result && result.res.success) {
      yield put(dataServicesReturned({ data: result.res, sort }));
    } else {
      yield put(dataServicesReturned({ data: [] }));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetServices() {
  yield takeEvery(GET_DATA_SERVICES, performGetServices);
}
function* performGetDataSlider(action) {
  try {
    let sort = action.sort;
    // let subSort = action.subSort;

    let data = action.data;
    const result = yield call(getDataSlider, data, sort);
    if (result && result.res.success) {
      yield put(dataSliderReturned({ data: result.res, sort }));
    } else {
      yield put(dataSliderReturned({ data: [] }));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetDataSlider() {
  yield takeEvery(GET_DATA_SLIDER, performGetDataSlider);
}
function* performGetPartners(action) {
  try {
    let sort = action.sort;

    let data = action.data;
    const result = yield call(getDataPartners, data, sort);
    if (result && result.res.success) {
      yield put(dataPartnersReturned({ data: result.res, sort }));
    } else {
      yield put(dataPartnersReturned({ data: [] }));
    }
  } catch (error) {}
}

export function* watchGetPartners() {
  yield takeEvery(GET_DATA_PARTNERS, performGetPartners);
}
function* performGetById(action) {
  try {
    let id = action.id;
    let sort = action.sort;
    const result = yield call(getById, sort, id);
    if (result)
      yield put(
        byIdReturned({
          data: { result: result.res },
        })
      );
    else yield put(byIdReturned({ data: [] }));
  } catch (error) {
    yield put(byIdReturned({ data: [] }));
  }
}

export function* watchGetById() {
  yield takeEvery(GET_BY_ID, performGetById);
}
function* performGetByAlias(action) {
  try {
    const { alias, sort, language } = action;

    const result = yield call(getByAlias, sort, alias, language);
    if (result) {
      yield put(byAliasReturned({ data: result.res }));
    } else yield put(byAliasReturned({ data: [] }));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetByAlias() {
  yield takeEvery(GET_BY_ALIAS, performGetByAlias);
}

function* performSubmitComment(action) {
  try {
    let data = action.data;
    let sort = action.sort;
    const result = yield call(submitComment, data, sort);

    if (result) {
      yield put(submitCommentReturned({ data: result.data }));
    } else {
      yield put(submitCommentReturned({ data: [] }));
    }
  } catch (error) {
    console.error(error);
  }
}
export function* watchSubmitComment() {
  yield takeLatest(SUBMIT_COMMENT, performSubmitComment);
}

function* performGetPageInfo(action) {
  try {
    const data = action.data;
    const result = yield call(fetchPageInfo, data);

    if (result) yield put(pageDetailsReturned({ data: result.res }));
    else yield put(pageDetailsReturned({ data: [] }));
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetPageInfo() {
  yield takeLatest(GET_PAGE_DETAILS, performGetPageInfo);
}

function* performAskForRating(action) {
  try {
    const { url } = action;
    const result = yield call(askingForRate, url);

    if (result) yield put(askForRateReturned({ data: result.res }));
    else yield put(askForRateReturned({ data: [] }));
  } catch (error) {
    console.error(error);
  }
}

export function* watchAskForRating() {
  yield takeEvery(ASK_FOR_RATE, performAskForRating);
}
function* performCreateNew(action) {
  let FilesUserIds = [];
  try {
    let data = action.payload;
    let sort = action.sort;
    let token = action.token;
    let fileUserId = data.fileId || [];
    let currentFileId = data.currentFileId;

    let direction = yield select(selectors.direction);

    if (fileUserId && fileUserId.length) {
      if (currentFileId?.length) {
        yield call(deleteItem, "file", currentFileId.id);
      }

      var formData = new FormData();
      fileUserId.map((file) => {
        formData.append("files", file);
      });

      let responseData = yield call(uploadFile, formData);

      if (!responseData?.data?.success) {
        let error;
        if (responseData?.data?.code === 111)
          error = direction
            ? "يرجى تحميل ملف بالامتداد المسموح به فقط  "
            : "File Type is Not Allowed";
        else if (responseData?.data?.code === 112)
          error = direction
            ? "حجم الملفات كبير جدا"
            : "Files Size is Too Large";
        else error = responseData?.data?.message;
        yield put(fileUploaded({ response: error }));
      }
      let payload = [];

      responseData.data.files.map((file, index) => {
        payload.push({
          uuid: file.filename || null,
          extension: file.extension,
          publishMode: 3,

          alt: { ar: fileUserId[index]["alt"] || null },
          title: { ar: fileUserId[index]["alt"] || null },

          ...file,
        });
      });
      let FileUserIdPayload = yield call(createFile, payload);

      FileUserIdPayload.data.files.map((files) => FilesUserIds.push(files.id));
    }

    if (sort === "users/profile/update") {
      delete data["currentFileId"];
      data = { ...data, fileId: FilesUserIds[0] };
    }

    let result = [];
    result = yield call(createNew, sort, data, token);
    if (result?.data?.success) {
      yield put(created({ response: { ...result.data, sort: sort } }));
    } else {
      yield put(created({ response: { ...result.data, sort: sort } }));
    }
  } catch (e) {
    yield put(created({ response: "" }));
    return;
  }
}

export function* watchCreateNew() {
  yield takeEvery(CREATE_NEW, performCreateNew);
}

function* performGetDataNotification(action) {
  try {
    let sort = action.sort;
    let data = action.data;
    const result = yield call(getData, data, sort);
    if (result && result.res.success) {
      yield put(allNotificationsReturned({ data: result.res, sort }));
    } else {
      yield put(allNotificationsReturned({ data: [] }));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetDataNotifications() {
  yield takeEvery(GET_NOTIFICATIONS, performGetDataNotification);
}

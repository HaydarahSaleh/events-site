import actions from "../../actions";
import { combineReducers } from "redux";

const {
  UPLOAD_FILE,
  FILE_UPLOADED,
  FILE_CREATED,
  DELETE_FILE_ACTION,
  FILE_DELETED,
  READ_FILE_ACTION,
  READ_COMPLETED,
  DOWNLOAD_COUNT_ACTION,
  DOWNLOAD_COUNT_COMPLETED,
  DOWNLOAD_FILE,
  FILE_DOWNLOADED,
} = actions;

export const uploadFile = (state = false, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return true;
    case FILE_UPLOADED:
      return false;
    default:
      return state;
  }
};
export const fileUploaded = (state = false, action) => {
  switch (action.type) {
    case FILE_UPLOADED:
      return action.response;
    default:
      return state;
  }
};
export const fileCreated = (state = false, action) => {
  switch (action.type) {
    case FILE_CREATED:
      return action.response;
    case FILE_DELETED:
      return false;
    default:
      return state;
  }
};

export const deleteFile = (state = false, action) => {
  switch (action.type) {
    case DELETE_FILE_ACTION:
      return true;
    case FILE_DELETED:
      return false;
    default:
      return state;
  }
};

export const fileDeleted = (state = false, action) => {
  switch (action.type) {
    case FILE_DELETED:
      return action.response;
    default:
      return state;
  }
};

export const readFileAction = (state = false, action) => {
  switch (action.type) {
    case READ_FILE_ACTION:
      return true;
    case READ_COMPLETED:
      return false;
    default:
      return state;
  }
};

export const readCompleted = (state = false, action) => {
  switch (action.type) {
    case READ_COMPLETED:
      return action.response;
    default:
      return state;
  }
};

export const downloadCountAction = (state = false, action) => {
  switch (action.type) {
    case DOWNLOAD_COUNT_ACTION:
      return true;
    case DOWNLOAD_COUNT_COMPLETED:
      return false;
    default:
      return state;
  }
};

export const downloadCountCompleted = (state = false, action) => {
  switch (action.type) {
    case DOWNLOAD_COUNT_COMPLETED:
      return action.response;
    default:
      return state;
  }
};

export const downloadFile = (state = false, action) => {
  switch (action.type) {
    case DOWNLOAD_FILE:
      return true;
    case FILE_DOWNLOADED:
      return false;

    default:
      return state;
  }
};
export const downloadedFiles = (state = [], action) => {
  switch (action.type) {
    case FILE_DOWNLOADED:
      return action.response;

    default:
      return state;
  }
};

export default combineReducers({
  uploadFile,
  fileUploaded,
  fileCreated,
  deleteFile,
  fileDeleted,
  readFileAction,
  readCompleted,
  downloadCountAction,
  downloadCountCompleted,
  downloadFile,
  downloadedFiles,
});

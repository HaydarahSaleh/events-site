import { createAction } from "../creators";

export default {
  ...createAction("UPLOAD_FILE", "files"),
  ...createAction("FILE_UPLOADED", "response"),
  ...createAction("CREATE_FILE", "payload"),
  ...createAction("FILE_CREATED", "response"),
  ...createAction("DELETE_FILE_ACTION", "id"),
  ...createAction("FILE_DELETED", "response"),
  ...createAction("READ_FILE_ACTION", "id"),
  ...createAction("READ_COMPLETED", "response"),
  ...createAction("DOWNLOAD_COUNT_ACTION", "id", "language"),
  ...createAction("DOWNLOAD_COUNT_COMPLETED", "response"),
  ...createAction("DOWNLOAD_FILE", "payload"),
  ...createAction("FILE_DOWNLOADED", "response"),
};

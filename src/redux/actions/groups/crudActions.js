import { createAction } from "../creators";

export default {
  ...createAction("GET_NOTIFICATIONS", "data", "sort"),
  ...createAction("ALL_NOTIFICATIONS_RETURNED", "data"),

  ...createAction("CLEAR", "data"),
  ...createAction("ALL_ITEMS_RETURNED", "sort", "subSort", "data"),
  ...createAction("ALL_CLEAR", "data"),
  ...createAction("GET_ALL", "data", "sort"),
  ...createAction("ALL_RETURNED", "data", "sort", "subSort"),

  ...createAction("GET_DATA_CONF", "data", "sort"),
  ...createAction("DATA_CONF_RETURNED", "data"),

  ...createAction("GET_DATA_MENUS", "data", "sort"),
  ...createAction("DATA_MENUS_RETURNED", "data"),

  ...createAction("GET_DATA", "data", "sort"),
  ...createAction("DATA_RETURNED", "data", "dataObject"),

  ...createAction("GET_DATA_ACHIVMENTS", "data", "sort"),
  ...createAction("DATA_ACHIVMENTS_RETURNED", "data"),

  ...createAction("GET_DATA_SERVICES", "data", "sort"),
  ...createAction("DATA_SERVICES_RETURNED", "data"),

  ...createAction("GET_DATA_SLIDER", "data", "sort"),
  ...createAction("DATA_SLIDER_RETURNED", "data"),

  ...createAction("GET_BY_ID", "sort", "subSort", "id"),
  ...createAction("BY_ID_RETURNED", "sort", "subSort", "data"),

  ...createAction("GET_BY_ALIAS", "sort", "alias", "language"),
  ...createAction("BY_ALIAS_RETURNED", "sort", "subSort", "data"),

  ...createAction("SUBMIT_COMMENT", "data", "sort"),
  ...createAction("SUBMIT_COMMENT_RETURNED", "data"),

  ...createAction("GET_PAGE_DETAILS", "data"),
  ...createAction("PAGE_DETAILS_RETURNED", "data"),

  ...createAction("GET_DATA_PARTNERS", "data", "sort"),
  ...createAction("DATA_PARTNERS_RETURNED", "data"),

  ...createAction("ASK_FOR_RATE", "url"),
  ...createAction("ASK_FOR_RATE_RETURNED", "data"),

  ...createAction("CREATE_NEW", "sort", "payload", "language", "token"),
  ...createAction("CREATED", "sort", "response"),

  ...createAction("READ_FILE_ACTION", "id"),
  ...createAction("READ_COMPLETED", "response"),

  ...createAction("DOWNLOAD_COUNT_ACTION", "id"),
  ...createAction("DOWNLOAD_COUNT_COMPLETED", "response"),

  ...createAction("DELETE_ITEM", "sort", "subSort", "id"),
  ...createAction("DELETED", "sort", "subSort", "response"),
};

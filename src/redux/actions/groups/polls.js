import { createAction } from "../creators";

export default {
  ...createAction("SUBMIT_POLL", "payload"),
  ...createAction("SUBMIT_POLL_DONE", "response"),

  ...createAction("CLEAR_POLL", "data"),

  ...createAction("GET_ANSWERS_BY_ID", "id"),
  ...createAction("ANSWERS_BY_ID_RETURNED", "data"),
};

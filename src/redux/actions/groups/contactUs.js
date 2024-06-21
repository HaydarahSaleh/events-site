import { createAction } from "../creators";
export default {
  ...createAction("NEW_CONTACT", "sort", "payload", "language"),
  ...createAction("ADDED_CONTACT", "sort", "response"),
};

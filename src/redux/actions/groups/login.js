import { createAction } from "../creators";

export default {
  ...createAction("LOGIN", "payload"),
  ...createAction("LOGIN_DONE", "response"),
  ...createAction("CLEAR_LOGIN_RESPONSE", "response"),

  ...createAction("FORGET_PASSWORD", "payload"),
  ...createAction("FORGET_PASSWORD_DONE", "response"),
  ...createAction("CLEAR_FORGET_PASSWORD_RESPONSE", "response"),

  ...createAction("RESET_PASSWORD", "payload"),
  ...createAction("RESET_PASSWORD_DONE", "response"),
  ...createAction("CLEAR_RESET_PASSWORD_RESPONSE", "response"),

  ...createAction("EDIT_PROFILE", "payload", "token", "language"),
  ...createAction("EDIT_PROFILE_DONE", "response"),
};

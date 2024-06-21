import { createAction } from "../creators";

export default {
  ...createAction("CLEAR_FILTER", "data"),

  ...createAction("FILTER_POSTS", "data", "sort"),
  ...createAction("FILTER_POSTS_RETURNED", "data", "sort", "subSort"),
};

import { createAction } from "../creators";

export default {
  ...createAction("CLEAR_RESULTS", "data"),
  ...createAction("GET_RESULTS", "data", "sort"),
  ...createAction("GET_RESULTS_RETURNED", "data", "searchWord", "sort"),
  ...createAction("GET_SUGGESTIONS", "data", "sort"),
  ...createAction("GET_SUGGESTIONS_RETURNED", "data", "sort"),
};

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import theme_reducer from "./theme";
import polls from "./groups/polls";
import files from "./groups/file";
import crud from "./groups/crud";
import surveys from "./groups/survey";
import contactUs from "./groups/contactUs";
import filterPosts from "./groups/filterPosts";
import search from "./groups/search";
import login from "./groups/login";
import homeLoading from "./groups/homeLoading";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    theme_reducer,
    crud,
    polls,
    files,
    surveys,
    contactUs,
    filterPosts,
    search,
    login,
    homeLoading,
  });

export default rootReducer;

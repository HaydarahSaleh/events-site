import theme from "./groups/theme";
import crud from "./groups/crudActions";
import polls from "./groups/polls";
import files from "./groups/file";
import survey from "./groups/survey";
import contactUs from "./groups/contactUs";
import filterPosts from "./groups/filterPosts";
import search from "./groups/search";
import login from "./groups/login";
import homeLoading from "./groups/homeLoading";

export default {
  ...theme,
  ...crud,
  ...polls,
  ...files,
  ...survey,
  ...contactUs,
  ...filterPosts,
  ...search,
  ...login,
  ...homeLoading,
};

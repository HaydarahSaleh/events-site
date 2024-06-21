import { fetchData } from "./api";

export const filterPosts = async (data, sort) =>
  await fetchData(`/api/${sort}`, data, null);

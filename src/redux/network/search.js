import { fetchData } from "./api";

export const getResults = async (data, sort) =>
  await fetchData(`/api/${sort}`, data, null);

import { fetchData, postData } from "./api";
let language = JSON.parse(localStorage.getItem("iconLang"))
  ? JSON.parse(localStorage.getItem("iconLang"))
  : "ar";
let userToken = localStorage.getItem("iconToken")
  ? localStorage.getItem("iconToken")
  : sessionStorage.getItem("iconTokenSession");

export const getAll = async (data, sort) =>
  await fetchData(`/api/${sort}`, data, null);

export const getData = async (data, sort) =>
  await fetchData(`/api/${sort}`, data, null);

export const getDataConf = async (data, sort) =>
  await fetchData(`/api/${sort}`, data, null);

export const getDataMenus = async (data, sort) =>
  await fetchData(`/api/${sort}`, data, null);

export const getDataSlider = async (data, sort) =>
  await fetchData(`/api/${sort}`, data, null);

export const getDataAchivments = async (data, sort) =>
  await fetchData(`/api/${sort}`, data, null);

export const getDataServices = async (data, sort) =>
  await fetchData(`/api/${sort}`, data, null);

export const getDataPartners = async (data, sort) =>
  await fetchData(`/api/${sort}`, data, null);

export const getById = async (sort, id) =>
  await fetchData(`/api/${sort}/${id}`, null);

export const getByAlias = async (sort, alias) =>
  await fetchData(`/api/${sort}/${alias}`, null, null);

export const submitComment = async (data, sort) =>
  await postData(`/api/${sort}`, data, null);

export const fetchPageInfo = async (url) =>
  await fetchData(`/api/page/byurl`, { url }, null);

export const askingForRate = async (url) =>
  await fetchData(`/api/rate/askFor`, { url }, null);

export const createNew = async (sort, data, token) => {
  return await postData(`/api/${sort}`, data, {
    token: token ? userToken : null,
  });
};
export const readCounter = async (id) =>
  await postData(`/api/file/${id}/count/read`, { language });

export const downloadCounter = async (id) =>
  await postData(`/api/file/${id}/count/download`, { language });

export const deleteItem = async (sort, id) =>
  await postData(`/api/${sort}/${id}/delete`, null, {
    token: userToken,
  });

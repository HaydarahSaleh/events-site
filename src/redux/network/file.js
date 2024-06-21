import { postData, fetchBinaryData } from "./api";
import axios from "axios";
const localToken = localStorage.getItem("iconToken");
const sessionToken = sessionStorage.getItem("iconTokenSession");
const token = localToken ? localToken : sessionToken;

export const uploadFile = async (data) => {
  try {
    return await axios.post(`/api/file/upload`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    return false;
  }
};

export const createFile = async (data) =>
  await postData(`/api/file`, data, { token });

export const deleteFile = async (id) =>
  await postData(`/api/file/${id}/delete`, null, { token });

export const readFileAction = async (id) =>
  await postData(`/api/file/${id}/count/read`, null);

export const downloadCountAction = async (id, language) =>
  await postData(`/api/file/${id}/count/download`, null);

export const downloadFile = async (uuid) =>
  await fetchBinaryData(`/api/file/download/${uuid}`, null, { token });

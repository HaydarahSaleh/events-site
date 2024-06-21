import { postData } from "./api";

export const login = async (data) => {
  return await postData(`/api/users/login/site`, data, { lang: "all" });
};

export const forgetPassword = async (data) => {
  return await postData(`/api/users/password/forget`, data, null);
};

export const resetPassword = async (data) => {
  return await postData(`/api/users/password/reset`, data, null);
};

export const editProfile = async (data, token, language) => {
  return await postData(`/api/users/profile/update`, data, {
    token: token,
    lang: language,
  });
};

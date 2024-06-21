import { fetchData, postData } from "./api";

export const submitSurvey = async (data) => {
  return await postData(`/api/survey/answer`, data, null);
};

export const getSurveyAnswers = async (id) =>
  await fetchData(`/api/survey/${id}/answers`);

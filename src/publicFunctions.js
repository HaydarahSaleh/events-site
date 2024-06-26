import moment from "moment";
import "moment/locale/ar-sa";
import "moment/locale/en-au";

const language = JSON.parse(localStorage.getItem("iconLang"))
  ? JSON.parse(localStorage.getItem("iconLang"))
  : "ar";

export const getDataInfo = (type) => {
  let returnedType = "post";
  switch (type) {
    case "image":
      returnedType = "category";
      break;
    case "video":
      returnedType = "category";
      break;
    case "encyclopedia":
      returnedType = "category";
      break;
    default:
      returnedType = "post";
  }
  return returnedType;
};
export const isPdf = (type) => {
  let returned = false;
  if (type === "publications") {
    return true;
  }
  return returned;
};

const check_language_publishmode = (publicMode) => {
  let outcomes = false;
  if (
    language === "ar" &&
    (publicMode === 1 ||
      publicMode === 2 ||
      publicMode === 3 ||
      publicMode === 7)
  ) {
    outcomes = true;
  } else if (
    language === "en" &&
    (publicMode === 4 ||
      publicMode === 2 ||
      publicMode === 5 ||
      publicMode === 7)
  ) {
    outcomes = true;
  } else if (
    language === "fr" &&
    (publicMode === 6 ||
      publicMode === 3 ||
      publicMode === 5 ||
      publicMode === 7)
  ) {
    outcomes = true;
  }
  return outcomes;
};

export const getImage = (files) => {
  const image = files?.find(
    (file) =>
      file &&
      file?.mimetype?.split("/")[0] === "image" &&
      check_language_publishmode(file?.publishMode)
  );
  return {
    uuid: image?.uuid,
    alt: image?.alt ? image?.alt[language] || "" : null,
  };
};

export const getImages = (files) => {
  if (!files?.length) return;
  let images = files?.filter(
    (file) =>
      file &&
      check_language_publishmode(file?.publishMode) &&
      file?.mimetype?.includes("image")
  );

  return images;
};
export const getLinks = (links) => {
  if (!links?.length) return;
  let Links = links?.filter(
    (link) => link && check_language_publishmode(link?.publishMode)
  );
  return Links;
};

export const getFiles = (files) => {
  if (!files?.length) return;
  let filteredFiles = files?.filter(
    (file) =>
      file &&
      check_language_publishmode(file?.publishMode) &&
      file?.mimetype?.includes("application")
  );
  return filteredFiles;
};

export const getFile = (files) => {
  if (!files?.length) return;
  const file = files?.find(
    (item) =>
      item &&
      item?.mimetype?.split("/")[0] === "application" &&
      check_language_publishmode(item?.publishMode)
  );

  return {
    id: file?.id,
    uuid: file?.uuid,
    title: file?.title ? file?.title[language] || "" : null,
    readCount: file?.readCount,
    downloadCount: file?.downloadCount,
    fileId: file?.id,
  };
};

export const getFileUrl = async (fileName) => {
  return fetch(`/api/file/download/${fileName}`)
    ?.then((res) => res?.blob())
    ?.then((res) => URL?.createObjectURL(res));
};

export const getDays = (startTime, endTime) => {
  let current = new Date();
  let a = moment(new Date().setDate(current.getDate()));
  let b = moment(startTime);
  let daysBetween = moment(b)
    .startOf("day")
    .diff(moment(current).startOf("day"), "days", true);
  let secondsBetween = b.diff(a, "seconds");
  let today = new Date();
  if (
    daysBetween < 0 &&
    new Date(startTime).getTime() < new Date(today).getTime() &&
    new Date(endTime).getTime() < new Date(today).getTime()
  ) {
    return "Inactive";
  }
  return daysBetween;
};
export const getMenuItem = (menuItems) => {
  const menuItem = menuItems?.find((item) => {
    const { title } = item;
    const isMenuitem = title === "header" ? true : false;

    if ((item && title === "header") || (title === "الرئيسية" && isMenuitem))
      return true;
    else return false;
  });

  return {
    menuItem,
  };
};

export const dynamicDataPagination = (itemsNum, pageNum) => {
  let startIndex = (pageNum - 1) * itemsNum;
  return { startIndex };
};

{
  /**Test Active Survey */
}
export const testExpiredDate = (startTime, endTime) => {
  const nowDate = new Date();
  const finishDate = new Date(endTime);
  const startDate = new Date(startTime);
  return nowDate > finishDate && nowDate < startDate;
};

export const getElementByKey = (key, configurationData) => {
  if (configurationData && configurationData?.length) {
    const element = configurationData.find((el) =>
      el?.key ? el.key === key : null
    );
    return element?.value;
  }
};

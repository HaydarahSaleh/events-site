function addLanguageToUrl(url, currentLanguage) {
  const urlParts = url?.split("/").filter(Boolean);

  if (urlParts[0] !== "en" && urlParts[0] !== "ar" && urlParts[0] !== "fr") {
    urlParts.unshift(currentLanguage);
  }
  return "/" + urlParts.join("/");
}

function resolveHome(url) {
  if (url === "/en") return "/en/home";
  if (url === "/ar") return "/ar/home";
  if (url === "/fr") return "/fr/home";
  return url;
}

function extractLanguageFromUrl(url) {
  const regExpResilt = url.match(/^\/(ar|en|fr)\/.*$/);
  if (!regExpResilt) return "ar";
  return regExpResilt[1];
}

export async function buildCanonicalUrl(currentUrl, currentLanguage) {
  let canonicalUrl = currentUrl;
  canonicalUrl = addLanguageToUrl(canonicalUrl, currentLanguage);
  canonicalUrl = resolveHome(canonicalUrl);
  const canonicalLanguage = extractLanguageFromUrl(canonicalUrl);
  return { canonicalUrl, canonicalLanguage };
}

export async function switchLanguages(lang) {
  const url = window.location.pathname;
  const urlParts = url.split("/").filter(Boolean);
  localStorage.setItem("iconLang", JSON.stringify(lang));
  const currentLanguage = urlParts[0];
  const targetLanguage = lang;

  urlParts[0] = targetLanguage;

  window.location.href = "/" + urlParts.join("/");
}
export const pagination = (displayedContent, itemsNum, pageNum) => {
  const count = Math?.ceil(displayedContent?.length / itemsNum);
  const startIndex = (pageNum - 1) * itemsNum;
  const requiredArr = displayedContent?.slice(
    startIndex,
    startIndex + itemsNum
  );

  return { count, requiredArr };
};

export const dynamicDataPagination = (itemsNum, pageNum) => {
  let startIndex = (pageNum - 1) * itemsNum;
  return { startIndex };
};

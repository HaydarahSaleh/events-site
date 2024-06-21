const fetchData = async (endpoint, params, customHeaders) => {
  const language = params?.lang
    ? params?.lang
    : JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  let headers2 = {
    language,
  };
  const headers = { ...headers2, ...customHeaders };

  const searchParams = Object.entries(params || {})
    .map((pair) => pair.map(encodeURIComponent).join("="))
    .join("&");

  const url = `${endpoint}?${searchParams}`;
  return fetch(url, { method: "GET", headers })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.hasOwnProperty("statusCode")) {
        return { networkSuccess: false, ...res };
      } else {
        return { networkSuccess: true, res };
      }
    })
    .catch((e) => {
      return { networkSuccess: false };
    });
};
const postData = async (endpoint, body, customHeaders) => {
  const language = customHeaders?.lang
    ? customHeaders?.lang
    : JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";

  let headers2 = {
    language,
  };
  let headers = { accept: "application/json", ...customHeaders, ...headers2 };
  const url = `${endpoint}`;
  if (body) {
    headers["Content-Type"] = "application/json";
  }

  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.hasOwnProperty("statusCode")) {
        return { networkSuccess: false, ...res };
      } else {
        return { networkSuccess: true, data: res };
      }
    })
    .catch((e) => ({ networkSuccess: false }));
};

const fetchBinaryData = async (endpoint, params, customHeaders) => {
  const headers = { ...customHeaders };
  const searchParams = Object.entries(params || {})
    .map((pair) => pair.map(encodeURIComponent).join("="))
    .join("&");

  const url = `${endpoint}?${searchParams}`;

  return fetch(url, { method: "GET", headers })
    .then((res) => {
      return res.blob();
    })
    .then((res) => {
      res = URL.createObjectURL(res);

      if (res.hasOwnProperty("statusCode")) {
        return { networkSuccess: false };
      } else {
        return res;
      }
    })
    .catch((e) => {
      return { networkSuccess: false };
    });
};

export { fetchData, postData, fetchBinaryData };

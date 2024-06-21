import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { buildCanonicalUrl } from "../components/shared/utils";
import { setDirection } from "../redux/actionCreators/theme";
import Routing from "./Routing";
import BeatLoader from "react-spinners/BeatLoader";

function Index() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const [spinner, setSpinner] = useState(false);
  let currentLanguage = localStorage.getItem("iconLang")
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  const { pathname: currentUrl } = useLocation();

  useEffect(() => {
    (async () => {
      const urlParts = currentUrl.split("/").filter(Boolean);
      const language = urlParts[0];
      if (
        (language === "ar" || language === "en" || language === "fr") &&
        currentLanguage !== language
      ) {
        localStorage.setItem("iconLang", JSON.stringify(language));
        dispatch(setDirection({ isRTL: language === "ar" }));
        i18n.changeLanguage(language);
        currentLanguage = language;
      }
      if (currentLanguage === "ar") dispatch(setDirection({ isRTL: true }));
      else dispatch(setDirection({ isRTL: false }));
      let { canonicalUrl, canonicalLanguage } = await buildCanonicalUrl(
        currentUrl,
        currentLanguage
      );

      localStorage.setItem("iconLang", JSON.stringify(canonicalLanguage));
      if (currentLanguage !== canonicalLanguage) {
        dispatch(
          setDirection({ isRTL: canonicalLanguage === "ar" ? true : false })
        );
        i18n.changeLanguage(currentLanguage);
      }

      if (canonicalUrl === currentUrl) {
        return;
      }
      window.location.replace(canonicalUrl);
    })();
  }, [currentUrl]);

  useEffect(() => {
    const urlParts = currentUrl.split("/").filter(Boolean);
    const currentLanguage = urlParts[0];
    if (
      currentLanguage === "en" ||
      currentLanguage === "ar" ||
      currentLanguage === "fr"
    )
      setSpinner(false);
    else setSpinner(true);
  }, [currentUrl]);

  return spinner ? (
    <div
      style={{
        display: "flex",
        top: 0,
        bottom: 0,
        zIndex: 6500,
        backdropFilter: "blur(2px)",
        right: 0,
        backgroundColor: "#ffffff1a",
        left: 0,
        position: "fixed",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BeatLoader
        color={"#244B5A"}
        loading={true}
        size={15}
        speedMultiplier={1}
      />
    </div>
  ) : (
    <Routing />
  );
}

export default Index;

import { Box } from "@mui/material";
import * as moment from "moment";
import "moment/locale/ar-sa";
import "moment/locale/en-au";
import "moment/locale/fr";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function LastUdate() {
  const { t } = useTranslation();
  const { getUpdateDate = "" } = useSelector((state) => state.crud);
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  moment.locale(lang === "ar" ? "ar-sa" : lang === "fr" ? "fr" : "en-au");

  return (
    <Box component="span" className="visitors">
      {t("LASTUPDATE")}:{" "}
      {moment(getUpdateDate ? getUpdateDate : new Date()).format("DD-MM-YYYY")}
    </Box>
  );
}

export default LastUdate;

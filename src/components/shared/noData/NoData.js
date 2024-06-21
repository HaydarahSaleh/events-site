import React from "react";
import useStyles from "../../../styles/components/shared/noData/noData";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Typography } from "@mui/material";
function NoData(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  let { card, morePaddingTop, survey, text } = props;
  return (
    <Typography
      className={
        morePaddingTop
          ? clsx(classes.noDataText, classes.morePaddingTop, classes.cardText)
          : card
          ? clsx(classes.noDataText, classes.cardText)
          : classes.noDataText
      }
    >
      {text ? text : survey ? t("LABEL.NOSURVEYQUES") : t("LABEL.NODATA")}
    </Typography>
  );
}

export default NoData;

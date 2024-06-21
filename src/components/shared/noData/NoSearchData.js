import React from "react";
import useStyles from "../../../styles/components/shared/noData/noData";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Typography, Box, Grid } from "@mui/material";
function NoSearchData(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  let { card, morePaddingTop } = props;
  return (
    <>
      <Grid
        container
        spacing={2}
        className={
          morePaddingTop ? classes.containerWithPadding : classes.container
        }
      >
        <Grid sm={12} md={12} xs={12} className={classes.imageBox}>
          <img src="/assets/images/noSearch.png" alt="no data" />
        </Grid>

        <Typography className={classes.noSearchDataText}>
          {t("LABEL.NOSEARCHDATA")}
        </Typography>
      </Grid>
    </>
  );
}

export default NoSearchData;

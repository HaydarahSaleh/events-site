import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useStyles from "../../../styles/pages/home/aboutSection/aboutSectionStyles";
import { stateicDataToSearch } from "../../../StaticDataToSearch";
import AboutCard from "../../../components/cards/aboutCard/AboutCard";
import { Chapter } from "../../../components/shared/chapter/Chapter";
function AboutSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  const {
    basicTheme: { isRTL },
  } = useSelector((state) => state.theme_reducer);

  return (
    <Chapter>
      <Grid container className={classes.cardsBox}>
        {stateicDataToSearch?.map((item) => {
          return (
            <Grid item xs={3} className={classes.cardsGrid}>
              <AboutCard item={item} image={item?.img} />
            </Grid>
          );
        })}
      </Grid>
    </Chapter>
  );
}
export default AboutSection;

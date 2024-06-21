import { Box, Button, Card, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AOS from "aos";
import moment from "moment";
import "moment/locale/ar-sa";
import "moment/locale/en-au";
import "moment/locale/fr";
import React, { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BiArrowBack } from "react-icons/bi";
import useStyles from "../../../styles/pages/home/mediaCenter/homeMediaCardStyles";
import { Link } from "react-router-dom";

function HomeMediaCard(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  let { image, item, path } = props;

  useEffect(() => {
    AOS.init({ duration: 2000, delay: 50 });
    AOS.refresh();
  }, []);
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  moment.locale(lang === "ar" ? "ar-sa" : lang === "fr" ? "fr" : "en-au");

  return (
    <Card className={classes.card} data-aos="fade-up" data-aos-duration="1500">
      <CardMedia>
        <Box className={classes.ImageBox}>
          <img src={props.image} alt={props.image?.alt ?? props.image?.alt} />
        </Box>
      </CardMedia>
    </Card>
  );
}

export default memo(HomeMediaCard);

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
import useStyles from "../../../styles/components/cards/eventCard/eventCardStyles";
import { Link } from "react-router-dom";

function EventCard(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  let { image, item, path } = props;
  console.log(item);

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
        <Box className={classes.imageBox}>
          <img src={"/images/event-card.PNG"} alt={image?.alt} />
        </Box>
      </CardMedia>
      <CardContent>
        <Typography className={classes.title}>Event</Typography>
        <Typography className={classes.date}>
          Thursday, 06 November 2023
        </Typography>
      </CardContent>
    </Card>
  );
}

export default memo(EventCard);

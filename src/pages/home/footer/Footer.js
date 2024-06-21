import { Box, Container, Grid, Typography } from "@mui/material";
import clsx from "clsx";
import React, { memo } from "react";
import useStyles from "../../../styles/pages/home/footer/Footer";
import { Link } from "react-router-dom";
import { Chapter } from "../../../components/shared/chapter/Chapter";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";

import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";

function Footer({ menuItems, quickLinks, configurations }) {
  const classes = useStyles();
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  const { t } = useTranslation();

  const HomeScreen = window.location.pathname === `/${lang}/home`;

  return (
    <Chapter maxWidth="xl">
      <Box className={classes.footerBox}>
        <Grid container className={classes.footerContainer}>
          <Grid
            item
            lg={5}
            className={classes.gridLink}
            sx={{ border: "1px solid white" }}
          >
            <Box className={classes.contactBox}>
              <Typography className={classes.mainTilte}>
                {t("TITLE.JOIN")}
              </Typography>
              <Typography className={classes.intro}>
                {t("TITLE.INTRO")}
              </Typography>
              <Box className={classes.socialBox}>
                <MdOutlineFacebook className={classes.icon} />
                <BiLogoInstagramAlt className={classes.icon} />
                <FaTiktok className={classes.icon} />
              </Box>
              <Typography className={classes.copyrights}>
                © 2023 THE ICONS -AWARDS. All Rights Reserved. With love by
                Elmous
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            className={classes.gridLink}
            sx={{ border: "1px solid blue" }}
          >
            <Box className={classes.contactBox}>
              <Typography className={classes.head}>
                {t("TITLE.MEDIA_CENTER")}
              </Typography>
              <Typography className={classes.text}>+9714654654654</Typography>
              <Typography className={classes.head}>
                {t("TITLE.MEDIA_CENTER")}
              </Typography>
              <Typography className={classes.text}>www.theicons.ae</Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            className={classes.gridLink}
            sx={{ border: "1px solid red" }}
          >
            <Box className={classes.imageBox}>
              <img src="/images/icon.png" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Chapter>
  );
}

export default memo(Footer);

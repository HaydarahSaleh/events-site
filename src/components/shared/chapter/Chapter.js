import { Box, Container, Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import clsx from "clsx";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import useStyles from "../../../styles/components/shared/chapter/chapterStyles";

import { useSelector } from "react-redux";

export const Chapter = ({
  children,
  title,
  subTitle,
  withButton,
  onClick,
  classNameStyle,
  noMargin,
  marginBox,
  smallMargin,
  id,
  homeBTn,
  ...props
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  let lang = JSON.parse(sessionStorage.getItem("iconsLang"))
    ? JSON.parse(sessionStorage.getItem("iconsLang"))
    : "ar";
  const homePage = window.location.pathname === `/${lang}/home`;

  return (
    <>
      <Container
        maxWidth="xl"
        className={clsx(
          classes.root,
          classNameStyle,
          homePage ? classes.rootHome : classes.rootOther
        )}
      >
        <Box id={id}>
          {title && (
            <Grid item xs={12} className={classes.chapterTitle}>
              <h2>{title}</h2>
            </Grid>
          )}
          {subTitle && (
            <Grid
              item
              xs={12}
              mb={props.services ? 0 : 10}
              className={classes.subTitle}
            >
              <Typography>{subTitle}</Typography>
            </Grid>
          )}

          <Box className={noMargin ? classes.noMargin : null}>{children}</Box>
        </Box>
      </Container>
    </>
  );
};

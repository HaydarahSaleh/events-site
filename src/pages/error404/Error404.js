import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "../../components/button/Button";
import useStyles from "../../styles/pages/error404/error404";

function Error404(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  let { title } = props;
  return (
    <Container maxWidth="xl" className={classes.error}>
      <Box className={classes.errorContainer}>
        <Box className={classes.errorImage}>
          <img
            src="/assets/images/ERROR.png"
            alt="notFoundImage"
            className={classes.Image}
          />
        </Box>
        <Box className={classes.descriptionError}>
          {title ? (
            <Typography className={classes.title}>{title}</Typography>
          ) : null}
          <Box className={classes.btnBox}>
            <Box className={classes.buttonBox}>
              <CustomButton
                primary
                onClick={(e) => (window.location.href = "/home")}
                label={t("ERROR.BUTTON")}
                primaryClasses={classes.widther}
              />
            </Box>
          </Box>
        </Box>
        <Box className={classes.errorSecondImage}>
          <img
            src="/assets/images/error2.png"
            alt="notFoundImage"
            className={classes.Image}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Error404;

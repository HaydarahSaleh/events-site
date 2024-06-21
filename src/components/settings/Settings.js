import CloseIcon from "@mui/icons-material/Close";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { themeList } from "../../constants/theme";
import {
  changeTheme,
  decreaseFont,
  increaseFont,
  resetFont,
  setDarkMode,
} from "../../redux/actionCreators/theme";
import useStyles from "../../styles/components/settings/settings";
import GoogleTranslate from "./GoogleTranslate";

function SettingDialogTitle(props) {
  const { children, onClose, ...other } = props;

  const classes = useStyles();

  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography className={classes.rootTitle} component="h6">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function Settings({ open, toggleSettingModal }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    theme_reducer: {
      basicTheme: { currentTheme, isRTL, isDark },
    },
  } = useSelector((state) => state);

  const [themes, setThemes] = useState([]);
  const [myTheme, setCurrentTheme] = useState(null);

  const handleClose = () => {
    toggleSettingModal();
  };
  const getThemeName = (name) => {
    let returnedName = t("SETTINGS.THEME");
    switch (name) {
      case "default Theme": {
        returnedName = t("SETTINGS.DEFAULTTHEME");
        break;
      }
      case "Dark Blue Theme": {
        returnedName = t("SETTINGS.DARKBLUETHEME");
        break;
      }
      case "Light Blue Theme": {
        returnedName = t("SETTINGS.LIGHTBLUETHEME");
        break;
      }
      case "Blind Theme": {
        returnedName = t("SETTINGS.BLINDTHEME");
        break;
      }
    }
    return returnedName;
  };
  useEffect(() => {
    setThemes(themeList);
  }, [isRTL]);

  useEffect(() => {
    let theme = localStorage.getItem("iconTheme");
    if (theme) setCurrentTheme(theme);
  }, [isRTL]);

  const classes = useStyles();
  return (
    <Fragment>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={classes.DialogWrap}
        disableAutoFocus={false}
        disableEnforceFocus={true}
      >
        <SettingDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {t("SETTINGS.FONT")}
        </SettingDialogTitle>
        <DialogContent className={classes.DialogContent}>
          <Grid className={classes.fontButtonsWrap}>
            <Button
              className={classes.fontButtons}
              variant="contained"
              onClick={() => {
                currentTheme.elements.fontSize.sm <
                  currentTheme.elements.fontSizeG[5] + 1 &&
                  dispatch(increaseFont());
              }}
            >
              A+
            </Button>
            <Button
              className={classes.fontButtons}
              variant="contained"
              onClick={() => {
                dispatch(resetFont());
              }}
            >
              A
            </Button>
            <Button
              className={classes.fontButtons}
              variant="contained"
              onClick={() => {
                currentTheme.elements.fontSize.sm >
                  currentTheme.elements.fontSizeG[0] &&
                  dispatch(decreaseFont());
              }}
            >
              A-
            </Button>
          </Grid>
        </DialogContent>
        <Divider variant="middle" />
        <SettingDialogTitle id="customized-dialog-title">
          {t("SETTINGS.COLORS")}
        </SettingDialogTitle>
        <DialogContent className={classes.DialogContent}>
          <Grid container className={classes.reverse}>
            <Grid item xs={12} />
            {themes &&
              themes?.map((theme) => {
                return (
                  <Grid
                    key={theme.id}
                    className={classes.colorButtonsWrap}
                    item
                    sm={6}
                    xs={12}
                  >
                    <Button
                      className={classes.colorName}
                      onClick={() => {
                        if (isDark) {
                          dispatch(setDarkMode({ isDark: false }));
                        }
                        dispatch(changeTheme(theme));
                      }}
                    >
                      {getThemeName(theme.name)}
                    </Button>
                    <Button
                      className={classes.colorButtons}
                      variant="contained"
                      style={{
                        backgroundColor:
                          theme.name === "Blind Theme" ||
                          theme.name === "عمى الالوان"
                            ? isDark
                              ? "#132F4C"
                              : "#fff"
                            : theme.elements.colors.primary,
                      }}
                      onClick={() => {
                        if (isDark) {
                          dispatch(setDarkMode({ isDark: false }));
                        }
                        localStorage.setItem("iconThemeTitle", theme.name);
                        dispatch(changeTheme(theme));
                      }}
                    >
                      {theme?.name === "Blind Theme" ? (
                        isDark ? (
                          <VisibilityOffIcon className={classes.black} />
                        ) : localStorage.getItem("iconThemeTitle") ===
                          "Blind Theme" ? (
                          <VisibilityIcon className={classes.black} />
                        ) : (
                          <VisibilityOffIcon className={classes.black} />
                        )
                      ) : null}
                    </Button>
                  </Grid>
                );
              })}
          </Grid>
        </DialogContent>
        <Divider variant="middle" />

        <DialogContent className={classes.DialogContent}>
          <Grid container className={classes.block}>
            <Grid
              className={clsx(classes.colorButtonsWrap, classes.marginBottom16)}
              item
              xs={6}
            >
              <Typography
                className={classes.colorName}
                component="h6"
                onClick={() => {
                  let current = localStorage.getItem("iconThemeTitle");
                  current === "Blind Theme" &&
                    !isDark &&
                    themes &&
                    dispatch(changeTheme(themes[0]));
                  dispatch(setDarkMode({ isDark: !isDark }));
                }}
              >
                {t("SETTINGS.NIGHTMODE")}
              </Typography>
              <IconButton
                className={classes.colorDarkMode}
                variant="contained"
                onClick={(e) => {
                  let current = localStorage.getItem("iconThemeTitle");
                  current === "Blind Theme" &&
                    !isDark &&
                    themes &&
                    dispatch(changeTheme(themes[0]));

                  dispatch(setDarkMode({ isDark: !isDark }));
                }}
              >
                {isDark ? <NightsStayIcon /> : <NightsStayOutlinedIcon />}
              </IconButton>
            </Grid>
            <Grid
              className={clsx(classes.google, classes.marginBottom16)}
              item
              md={6}
              xs={10}
            >
              <GoogleTranslate />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

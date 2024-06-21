import { Box, Typography } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { languages } from "../../../../publicData";
import { setDirection } from "../../../../redux/actionCreators/theme";
import actions from "../../../../redux/actions";
import useStyles from "../../../../styles/components/navBar/navBarItem/navBarItemStyle";
import { switchLanguages } from "../../../shared/utils";

function LangBtns({ open, handleClose, handleListKeyDown }) {
  let currentLang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { setLanguage } = actions;
  return (
    <Popper
      open={open}
      transition
      disablePortal
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        bottom: "-95px",
        top: "unset",
        right: "0px",
        left: "0px",
        boxShadow: "none",
      }}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper className={classes.paper}>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="menu-list-grow"
                onClick={handleListKeyDown}
                className={classes.listRoot}
              >
                <Box className={classes.rectangle2}></Box>
                <Box className={classes.rectangle}></Box>

                {languages
                  ?.filter((lang) =>
                    !currentLang
                      ? lang?.title !== "en"
                      : lang?.title !== currentLang
                  )
                  ?.map((item) => (
                    <MenuItem
                      onClick={handleClose}
                      className={classes.menuItem}
                    >
                      <Box
                        onClick={(e) => {
                          switchLanguages(item?.title);
                          dispatch(
                            setDirection({ isRTL: item?.title === "ar" })
                          );
                          dispatch(setLanguage({ language: item?.title }));
                          i18n.changeLanguage(item?.title);
                        }}
                        className={classes.boxLang}
                      >
                        <Typography className={classes.langTitle}>
                          {item?.title}
                        </Typography>
                        <Box className={classes.langImg}>
                          <img src={item?.flag} />
                        </Box>
                      </Box>
                    </MenuItem>
                  ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

export default memo(LangBtns);

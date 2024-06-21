import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { uid } from "react-uid";
import useStyles from "../../../styles/components/headerDialog/headerDialog";
let lang = JSON.parse(localStorage.getItem("iconLang"))
  ? JSON.parse(localStorage.getItem("iconLang"))
  : "ar";
const SubMenu = (item, handleClose) => {
  return (
    <ul className="subItem">
      {item.childrens.map((itemLink) => {
        return (
          <li key={uid(itemLink)} className="list">
            <NavLink
              to={`/${lang + itemLink?.link}`}
              className="subItemText"
              onClick={itemLink?.link !== "null" ? handleClose : null}
            >
              {itemLink?.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
const HeaderDialog = ({ open, handleClose, menuItems }) => {
  const [isShown, setIsShown] = useState(false);
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  let navigate = useNavigate();
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      className={classes.dialogBox}
    >
      <CSSTransition in={open} timeout={300} className="dialog">
        <Box>
          <Box className={classes.dialogHeader}>
            <Typography
              className={classes.dialogTitle}
              onClick={() => navigate("/home")}
            >
              {t("LABEL.HOME")}
            </Typography>
            <IconButton
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              className={classes.iconClose}
            >
              <CloseIcon className={classes.iconStyle} />
            </IconButton>
          </Box>
          <Box className={classes.itemBox}>
            {menuItems.map((item) => {
              return (
                <li key={uid(item)} className={classes.menuStyle}>
                  <Link
                    to={`/${lang + item?.link}`}
                    className={classes.menuStyle}
                  >
                    <Button key={uid(item)} className={classes.button}>
                      {item.title}
                    </Button>
                  </Link>
                  {item?.childrens?.length > 0 && SubMenu(item, handleClose)}
                </li>
              );
            })}
          </Box>
        </Box>
      </CSSTransition>
    </Dialog>
  );
};
export default HeaderDialog;

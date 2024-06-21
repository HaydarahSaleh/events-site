import { Button, Box } from "@mui/material";
import React from "react";
import useStyles from "../../styles/components/button/button";
import clsx from "clsx";
import { Link } from "react-router-dom";
const CustomButton = (props) => {
  const {
    className,
    label,
    path,
    disabled,
    item,
    primary,
    secondry,
    buttondiv,
    dialog,
    primaryClasses,
  } = props;

  const classes = useStyles();
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  const homePage = window.location.pathname === `/${lang}/home`;

  return (
    <Box
      className={
        homePage && (primary || secondry) ? classes.buttonBox : buttondiv
      }
    >
      {path ? (
        <Link to={`/${lang + path}`}>
          <Button
            className={
              disabled
                ? clsx(classes.disabled)
                : primary
                ? clsx(classes.primary, primaryClasses)
                : secondry
                ? classes.secondry
                : className
            }
            onClick={props.onClick}
          >
            <span>{label}</span>
            {item}
          </Button>
        </Link>
      ) : (
        <Button
          className={
            disabled
              ? clsx(classes.disabled)
              : primary
              ? clsx(classes.primary, primaryClasses)
              : secondry
              ? classes.secondry
              : dialog
              ? classes.dialog
              : className
          }
          onClick={props.onClick}
        >
          <span>{label}</span>
          {item}
        </Button>
      )}
    </Box>
  );
};

export default CustomButton;

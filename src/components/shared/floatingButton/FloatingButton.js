import { Box, Typography } from "@mui/material";
import clsx from "clsx";
import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useStyles from "../../../styles/components/shared/floatingButton/floatingButton";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Link, NavLink, useNavigate } from "react-router-dom";
function FloatingBtns({ magazines }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const reducer = useSelector((state) => state);

  const [clicked, setClicked] = useState(false);
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  return (
    <ClickAwayListener onClickAway={() => setClicked(false)}>
      <Box className={classes.floatingSocial}>
        <Box className="relative">
          <Box
            className={
              clicked
                ? clsx(classes.btnsContainer, classes.closeBackground)
                : clsx(classes.btnsContainer, classes.floatBackColor)
            }
            onClick={() => setClicked(!clicked)}
          >
            {clicked ? (
              <Box className="icon">
                <img
                  src={"/assets/images/home/closeIcon.gif"}
                  alt="Error GIF"
                />
              </Box>
            ) : (
              <Box className="icon">
                <img src={"/assets/images/home/bookIcon.gif"} alt="Book GIF" />
              </Box>
            )}
          </Box>
          {clicked ? (
            <Box className="clickedBox">
              {magazines.slice(0, 3).map((item, index) => {
                return (
                  <>
                    {item?.link ? (
                      <NavLink
                        to={
                          item?.link?.startsWith("http")
                            ? item?.link
                            : lang + item?.link
                        }
                      >
                        <Box className={`containBox${index}`}>
                          <Typography className={classes.textStyle}>
                            {item?.title}
                          </Typography>
                          <Box className={classes.Textbox}></Box>
                        </Box>
                      </NavLink>
                    ) : (
                      <Box className={`containBox${index}`}>
                        <Typography className={classes.textStyle}>
                          {item?.title}
                        </Typography>
                        <Box className={classes.Textbox}></Box>
                      </Box>
                    )}
                  </>

                  // <Box className={`containBox${index}`}>
                  //   <Typography className={classes.textStyle}>
                  //     {item?.title}
                  //   </Typography>
                  //   <Box className={classes.Textbox}></Box>
                  // </Box>
                );
              })}
            </Box>
          ) : null}
        </Box>
      </Box>
    </ClickAwayListener>
  );
}

export default memo(FloatingBtns);

import { Box, Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "../../../styles/components/notification/notificationStyle";
import { Link } from "react-router-dom";
const imageSlider = "/assets/images/notification/notificationLogo.png";

function Notification({ notifications }) {
  const classes = useStyles();
  const {
    basicTheme: { isRTL },
  } = useSelector((state) => state.theme_reducer);
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";

  return (
    <Box className={classes.notificationBoxFixed}>
      <Container maxWidth="xl" className={classes.notificationBox}>
        <div className={classes.scrollText}>
          {notifications?.map((item, index) => {
            return (
              <Box className="content">
                <span className={classes.imgSpan}>
                  <img src={imageSlider} alt="" />
                </span>
                {item?.linkType === "External" ? (
                  <Link
                    to={item?.link}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.notificationTitle}
                  >
                    {item?.title}
                  </Link>
                ) : (
                  <Link
                    to={item.link !== " " ? JSON.parse(item?.link)?.url : null}
                  >
                    <span className={classes.notificationTitle}>
                      {item?.title}
                    </span>
                  </Link>
                )}
              </Box>
            );
          })}
        </div>
      </Container>
    </Box>
  );
}
export default Notification;

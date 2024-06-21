import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useStyles from "../../../styles/pages/home/events/events";
import { stateicDataToSearch } from "../../../StaticDataToSearch";
import EventCard from "../../../components/cards/eventCard/EventCard";
import { Chapter } from "../../../components/shared/chapter/Chapter";
function EventSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  const {
    basicTheme: { isRTL },
  } = useSelector((state) => state.theme_reducer);

  return (
    <Chapter>
      <Box className={classes.sectionHead}>
        <Typography className={classes.sectionTitle}>EVENTS</Typography>
      </Box>

      <Box
        className={classes.eventsBox}
        sx={{
          backgroundImage: "url(/images/event.PNG)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container className={classes.eventsContainer}>
          {stateicDataToSearch?.map((item) => {
            return (
              <Grid item xs={3} className={classes.eventGrid}>
                <EventCard item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Chapter>
  );
}
export default EventSection;

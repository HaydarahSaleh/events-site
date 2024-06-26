import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useStyles from "../../../styles/pages/home/events/events";
import { stateicDataToSearch } from "../../../StaticDataToSearch";
import EventCard from "../../../components/cards/eventCard/EventCard";
import { Chapter } from "../../../components/shared/chapter/Chapter";
import { getImage } from "../../../publicFunctions";
import SliderComponent from "../../../components/slider/Slider";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
function EventSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const reducers = useSelector((state) => state?.crud?.allReturned?.events);

  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  const {
    basicTheme: { isRTL },
  } = useSelector((state) => state.theme_reducer);
  useEffect(() => {
    if (reducers?.length) {
      setData(reducers);
    }
  }, [reducers]);

  const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      style={{ background: "red", border: 0 }}
      {...props}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      className={"prev"}
    >
      {isRTL ? <MdOutlineKeyboardArrowRight /> : <MdOutlineKeyboardArrowLeft />}
    </button>
  );
  const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={"next"}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      {isRTL ? <MdOutlineKeyboardArrowLeft /> : <MdOutlineKeyboardArrowRight />}
    </button>
  );
  const settings = {
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    infinite: true,
    showIndicators: true,
    initialSlide: 1,
    slidesToShow:
      stateicDataToSearch?.length >= 3
        ? 4
        : stateicDataToSearch?.length === 2
        ? 2
        : stateicDataToSearch?.length,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    lazyLoad: false,
    autoplay: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow:
            stateicDataToSearch?.length === 3 || stateicDataToSearch?.length > 3
              ? 4
              : stateicDataToSearch?.length === 2
              ? 2
              : stateicDataToSearch?.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
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
        <Box className={classes.sliderBox}>
          <SliderComponent
            className="mainSlider"
            settings={settings}
            item={
              stateicDataToSearch &&
              stateicDataToSearch?.map((item) => (
                <Grid container>
                  <Grid item xs={3}>
                    <EventCard item={item} image={item?.img} />
                  </Grid>
                </Grid>
              ))
            }
          />
        </Box>
      </Box>
    </Chapter>
  );
}
export default EventSection;

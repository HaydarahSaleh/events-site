import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useStyles from "../../../styles/pages/home/aboutSection/aboutSectionStyles";
import { stateicDataToSearch } from "../../../StaticDataToSearch";
import AboutCard from "../../../components/cards/aboutCard/AboutCard";
import { Chapter } from "../../../components/shared/chapter/Chapter";
import { getImage } from "../../../publicFunctions";
import SliderComponent from "../../../components/slider/Slider";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
function AboutSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [sliderRef, setSliderRef] = useState(null);

  const reducers = useSelector((state) => state?.crud?.allReturned?.about);

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
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box className={classes.rootBox}>
      <Chapter>
        <Box className={classes.sliderBox}>
          <SliderComponent
            className="mainSlider"
            settings={settings}
            ref={setSliderRef}
            item={
              stateicDataToSearch &&
              stateicDataToSearch?.map((item) => (
                <Grid container>
                  <Grid item xs={3}>
                    <AboutCard item={item} image={item?.img} />
                  </Grid>
                </Grid>
              ))
            }
          />
        </Box>
      </Chapter>
    </Box>
  );
}
export default AboutSection;

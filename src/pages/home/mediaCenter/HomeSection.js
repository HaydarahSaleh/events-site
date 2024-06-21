import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stateicDataToSearch } from "../../../StaticDataToSearch";
import Button from "../../../components/button/Button";
import { Chapter } from "../../../components/shared/chapter/Chapter";
import SliderComponent from "../../../components/slider/Slider";
import actions from "../../../redux/actions";
import useStyles from "../../../styles/pages/home/mediaCenter/homeSectionStyles";
import HomeMediaCard from "../../../components/cards/galleryCard/HomeMediaCard";
function Gallery() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  const [id, setId] = useState();
  const [sliderRef, setSliderRef] = useState(null);
  const navigate = useNavigate();
  const { getAll } = actions;
  const classes = useStyles();
  const dispatch = useDispatch();
  const reducers = useSelector((state) => state);
  const { t } = useTranslation();
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  const {
    basicTheme: { isRTL },
  } = useSelector((state) => state.theme_reducer);

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
        ? 3
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
              ? 3
              : stateicDataToSearch?.length === 2
              ? 2
              : stateicDataToSearch?.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
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
    <Box className={classes.rootBox}>
      <Chapter>
        <Box className={classes.sectionHead}>
          <Typography className={classes.sectionTitle}>
            {t("TITLE.MEDIA_CENTER")}
          </Typography>
          <Typography className={classes.sectionSummary}>
            {t("TITLE.MEMORIES")}
          </Typography>
        </Box>

        <Box
          className={classes.sliderBox}
          style={{ height: "600px!important" }}
        >
          <SliderComponent
            className="mainSlider"
            settings={settings}
            ref={setSliderRef}
            item={
              stateicDataToSearch &&
              stateicDataToSearch?.map((item) => (
                <Grid container>
                  <Grid item xs={3}>
                    <HomeMediaCard item={item} image={item?.img} />
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
export default Gallery;

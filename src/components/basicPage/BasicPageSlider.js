import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import clsx from "clsx";
import { useSelector } from "react-redux";
import SliderComponent from "../../components/slider/Slider";
import useStyles from "../../styles/pages/basicPage/basicPage";

function BasicPageSlider(props) {
  let { images, type } = props;
  const [sliderRef, setSliderRef] = useState(null);
  const classes = useStyles();
  const {
    basicTheme,
    basicTheme: { isRTL, isDark },
  } = useSelector((state) => state.theme_reducer);

  const ArrowLeft = (props) => (
    <button
      style={{ background: "red", border: 0 }}
      {...props}
      className={"prev"}
    >
      {isRTL ? <MdOutlineKeyboardArrowRight /> : <MdOutlineKeyboardArrowLeft />}
    </button>
  );
  const ArrowRight = (props) => (
    <button
      style={{ background: "red", border: 0 }}
      {...props}
      className={"next"}
    >
      {isRTL ? <MdOutlineKeyboardArrowLeft /> : <MdOutlineKeyboardArrowRight />}
    </button>
  );
  const settings = {
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    // adaptiveHeight: true,
    lazyLoad: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // showIndicators: true,
    responsive: [
      {
        breakpoint: 994,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container
      maxWidth="xl"
      className={clsx(
        images?.length > 1
          ? classes.sliderMainContainerSlider
          : classes.sliderMainContainer
      )}
    >
      <SliderComponent
        className="mainSlider"
        settings={settings}
        ref={setSliderRef}
        customPaging={(i) => (
          <Box className={classes.sliderPaging}>{i + 1}</Box>
        )}
        item={
          images &&
          images?.map((item, index) => (
            <div key={index} className={classes.boxSlider}>
              <Box
                className={classes.boxImage}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={`/api/file/download/${item?.uuid}?size=large`} />
              </Box>
            </div>
          ))
        }
      />
    </Container>
  );
}
export default BasicPageSlider;

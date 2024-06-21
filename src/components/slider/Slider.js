import { Grid } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SliderComponent = (props) => {
  let { settings, ref, item, className } = props;
  return (
    <Slider {...settings} ref={ref} className={className} {...props}>
      {item}
    </Slider>
  );
};
export default SliderComponent;

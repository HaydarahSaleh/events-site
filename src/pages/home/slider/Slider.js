import { Box, Container, IconButton, Link, Typography } from "@mui/material";
import clsx from "clsx";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import { useTranslation } from "react-i18next";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../../components/button/Button";
import { getImages } from "../../../publicFunctions";
import actions from "../../../redux/actions";
import useStyles from "../../../styles/pages/home/slider/slider";

function HomeSlider() {
  const [sliderRef, setSliderRef] = useState(null);
  const classes = useStyles();
  const { t } = useTranslation();
  const { basicTheme } = useSelector((state) => state.theme_reducer);

  const ArrowLeft = (props) => (
    <IconButton {...props} className={"prev"}>
      <MdKeyboardDoubleArrowUp />
    </IconButton>
  );
  const ArrowRight = (props) => (
    <IconButton {...props} className={"next"}>
      <MdKeyboardDoubleArrowDown />
    </IconButton>
  );

  const sliderSettings = {
    autoplay: true,
    infinite: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    autoplaySpeed: 8000,
    dots: true,
    initialSlide: 0,
    rtl: false,
    slidesToShow: 1,
    useTransform: false,
    useCSS: false,
    lazyLoad: true,
    fade: false,

    customPaging: (i) => (
      <Box key={i}>
        <Box className="Active">{i + 1}</Box>
        <Box className="totalBox">
          <Box className="shadow"></Box>
          <Typography className="total">{totalSlides}</Typography>
        </Box>
      </Box>
    ),
  };

  const reducers = useSelector((state) => state);
  const dispatch = useDispatch();
  const { getDataSlider } = actions;
  const [dataSliders, setDataSliders] = useState([]);
  const [totalSlides, setTotalSlides] = useState(null);

  useEffect(() => {
    if (reducers?.crud?.dataSliderReturned?.posts) {
      setDataSliders(reducers?.crud?.dataSliderReturned?.posts);
      setTotalSlides(reducers?.crud?.dataSliderReturned?.posts?.length);
    }
  }, [reducers?.crud?.dataSliderReturned]);

  const slides = useMemo(
    () =>
      dataSliders?.map((item, index) => {
        return (
          <Box className="sliderBox">
            <Container maxWidth="xl" key={index} className="slideBox">
              <Box className="slideContain">
                <Typography className="sliderTitle">{item?.title}</Typography>
                {item?.description ? (
                  <Typography
                    className="sliderDescription"
                    dangerouslySetInnerHTML={{
                      __html: `${item?.description}`,
                    }}
                  ></Typography>
                ) : null}

                {item?.link && item.link !== " " ? (
                  item?.linkType === "External" ? (
                    <a
                      href={item?.link}
                      target="_blank"
                      rel="noreferrer"
                      className="sliderLink"
                    >
                      {t("BUTTON.MORE")}
                    </a>
                  ) : (
                    <Link
                      href={
                        item.link !== " " ? JSON.parse(item?.link)?.url : null
                      }
                    >
                      <Button label={t("BUTTON.MORE")} className="sliderLink" />
                    </Link>
                  )
                ) : null}
              </Box>

              <Box className="imageBox">
                <Box className="slideImage">
                  <img
                    src={`/api/file/download/${
                      getImages(item?.files, false)[0]?.uuid
                    }?size=medium`}
                    alt=""
                  />
                </Box>
              </Box>
            </Container>
          </Box>
        );
      }),
    [dataSliders]
  );

  return (
    <Box className={classes.sliderRootBox}>
      <Box className={classes.sliderRoot}>
        <Box className={clsx(classes.sliderContainer)}>
          <Slider {...sliderSettings} ref={setSliderRef}>
            {dataSliders && dataSliders?.length > 0 ? slides : null}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}
export default HomeSlider;
